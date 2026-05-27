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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});