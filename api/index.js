const express = require('express');
const axios = require('axios');
const app = express();

// 詳細API
app.get("/:endpoint/:slug", async (req, res) => {
  const { endpoint, slug } = req.params;
  const { data } = await axios.get(
    `https://news-210715.microcms.io/api/v1/${endpoint}/${slug}`,
    {
      headers: { 'X-API-KEY': process.env.API_KEY }
    }
  )
  res.send(data);
})

// 一覧API
app.get("/:endpoint", async (req, res) => {
  const { endpoint } = req.params;
  const { data } = await axios.get(
    `https://news-210715.microcms.io/api/v1/${endpoint}`,
    {
      headers: { 'X-API-KEY': process.env.API_KEY }
    }
  )
  res.send(data);
})

module.exports = {
  path: '/api',
  handler: app
}