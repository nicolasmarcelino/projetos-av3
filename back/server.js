require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3000;

/* corsOptios é necessário para permitir as requisições vindas do frontend */

const corsOptions = {
  origin: 'http://localhost:5173'
};

app.use(cors(corsOptions));

app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_PUBLISHABLE_KEY
);

app.get('/', (req, res) => {
  res.send('Sistema de compras');
});

app.get('/produtos', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('produto')
      .select();

    if (error) throw error;

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

app.get('/editar-produto/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const { data, error } = await supabase
      .from('produto')
      .select()
      .eq('id', id)
      .single(); /* retorna um único objeto */

    if (error) throw error;

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

app.put("/editar-produto/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, preco } = req.body;

  try {
    const { data, error } = await supabase
      .from("produto")
      .update({
        nome,
        preco
      })
      .eq("id", id)
      .select()  /* não é necessário, mas retorna o produto após update */
      .single(); /* retorna o produto atualizado */

    if (error) throw error;

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({
      error: err.message
    });
  }

});

app.delete("/deletar-produto/:id", async (req, res) => {
  try {
    const { error } = await supabase
      .from("produto")
      .delete()
      .eq("id", req.params.id)

    if (error) throw error;

    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({
      error: err.message
    });
  }

});

app.post('/criar-produto', async (req, res) => {
  const { nome, preco } = req.body

  try {
    const { data, error } = await supabase
      .from('produto')
      .insert({ nome, preco })
      .select()
      .single()

    if (error) throw error

    return res.status(201).json(data)
  } catch (err) {
    return res.status(500).json({
      message: err.message
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});