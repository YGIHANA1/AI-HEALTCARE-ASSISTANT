import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Crew, Agent, Task } from 'crewai';
import OpenAI from 'openai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Create specialized healthcare agents
const triageAgent = new Agent({
  name: 'Medical Triage Agent',
  goal: 'Assess symptoms and determine medical urgency',
  backstory: 'Expert in medical triage with years of emergency medicine experience',
  allowDelegation: true,
  verbose: true,
  llm: openai
});

const diagnosticAgent = new Agent({
  name: 'Diagnostic Support Agent',
  goal: 'Analyze symptoms and suggest possible conditions',
  backstory: 'Specialized in diagnostic medicine and symptom analysis',
  allowDelegation: true,
  verbose: true,
  llm: openai
});

const educationAgent = new Agent({
  name: 'Health Education Agent',
  goal: 'Provide medical information and preventive care guidance',
  backstory: 'Expert in patient education and preventive medicine',
  allowDelegation: true,
  verbose: true,
  llm: openai
});

const referralAgent = new Agent({
  name: 'Referral Agent',
  goal: 'Suggest appropriate medical care options',
  backstory: 'Specialized in healthcare navigation and referral systems',
  allowDelegation: true,
  verbose: true,
  llm: openai
});

app.post('/api/analyze-symptoms', async (req, res) => {
  try {
    const { symptoms } = req.json();

    const crew = new Crew({
      agents: [triageAgent, diagnosticAgent, educationAgent, referralAgent],
      tasks: [
        new Task({
          description: `Analyze the following symptoms and provide comprehensive medical guidance: ${symptoms}`,
          agent: triageAgent
        }),
        new Task({
          description: 'Based on the triage results, suggest possible conditions and next steps',
          agent: diagnosticAgent
        }),
        new Task({
          description: 'Provide relevant health education and preventive measures',
          agent: educationAgent
        }),
        new Task({
          description: 'Suggest appropriate medical care options and referrals',
          agent: referralAgent
        })
      ],
      verbose: true
    });

    const result = await crew.kickoff();

    res.json({
      success: true,
      analysis: result
    });
  } catch (error) {
    console.error('Error analyzing symptoms:', error);
    res.status(500).json({
      success: false,
      error: 'Error analyzing symptoms'
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});