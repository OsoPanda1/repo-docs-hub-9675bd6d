export type CellType =
  | 'Render3D'
  | 'Render4D'
  | 'IA-ImmersiveFX'
  | 'QuantumChannel'
  | 'SensorMultiFX'
  | 'APIIntegration'
  | 'Analytics'
  | 'UIControl'
  | 'SpatialLogic';

export interface KnowledgeCell {
  id: string;
  type: CellType;
  description: string;
  version: string;
  dependencies?: string[];
  inputFormat: string;
  outputFormat: string;
  iaSpecializationPrompt: string;
  apiEndpoint: string;
  microserviceUrl: string;
  testCases: string[];
  visualizationSample: string;
  author: string;
  created: string | Date;
  updated: string | Date;
}