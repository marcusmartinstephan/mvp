import express from 'express';
import type { Request, Response } from 'express';

const app = express();

// Test endpoint
app.get('/api/test', (_req: Request, res: Response) => {
  res.json({
    message: 'Test endpoint successful!',
    timestamp: new Date().toISOString()
  });
});

export default app;