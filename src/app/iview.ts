export interface IView{
    id: number;
    name: string;
    description: string;
    team: string;
    date: number;
    hora: number;
    scoreboard: number;
    round: number;    
}

export const view: IView[] = []