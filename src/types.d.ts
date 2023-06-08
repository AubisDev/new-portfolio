export type ISkill = {
  skillName: string
  icon: string
}

type Project = {
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

enum Direction {
  'left',
  'right',
  'up',
  'down'
}

type EffectOptions = {
  direction: Direction
  type: string
  delay: number
  duration: number
}
