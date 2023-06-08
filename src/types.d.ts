export type ISkill = {
  skillName: string
  icon: string
}

export type Project = {
  title: string
  desktopImg: string
  mobileImg: string
  githubLink: string
  techs: string[]
  repositoryLink: string
  liveDemoLink: string
}

export interface IFormInput {
  remitter: string
  contactPurpose: string
  contactDetails: string
}

export enum Direction {
  'left',
  'right',
  'up',
  'down'
}

export type EffectOptions = {
  direction: Direction
  type: string
  delay: number
  duration: number
}
