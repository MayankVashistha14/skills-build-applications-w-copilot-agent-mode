import express from 'express';
import './config/database.js';
import { User } from './models/User.js';
import { Activity } from './models/Activity.js';

const app = express();
const port = Number(process.env.PORT || 8000);
const codespaceName = process.env.CODESPACE_NAME;
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'octofit-tracker-api' });
});

app.get('/api/users', async (_request, response) => {
  const users = await User.find().lean();
  response.json(users);
});

app.get('/api/activities', async (_request, response) => {
  const activities = await Activity.find().lean();
  response.json(activities);
});

app.listen(port, () => {
  console.log(`OctoFit API listening at ${apiBaseUrl}`);
});
