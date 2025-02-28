import express from 'express';
import type { Request, Response } from 'express';

const app = express();

// Enable JSON parsing
app.use(express.json());

// Test endpoint
app.get('/api/test', (_req: Request, res: Response) => {
  try {
    res.json({
      message: 'Test endpoint successful!',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Error handling middleware
app.use((err: Error, _req: Request, res: Response) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something broke!',
    message: err.message
  });
});

// Handle 404s
app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: 'Not found' });
});

// Export for Vercel serverless
export default app;
