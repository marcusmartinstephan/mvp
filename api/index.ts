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

// Only start server when running locally, not on Vercel
if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 5000;
  app.listen(port, '0.0.0.0', () => {
    console.log(`API server running on port ${port}`);
  });
}

export default app;