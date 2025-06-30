export enum SkillType {
  FRONTEND = "FRONTEND",
  BACKEND = "BACKEND",
  BLOCKCHAIN = "BLOCKCHAIN",
  OTHER = "OTHER",
}

export interface ISkill {
  name: string;
  logo: string;
  type: SkillType;
}
