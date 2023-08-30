export interface Rounds {
     time_mandante: string;
     time_visitante: string;
     rodadaId: number;
     id: number;
     url: string;
     nome: string;
     placar: string;
     partida_id: number;
     placar_mantante: number;
     placar_visitante: number;
     _link: boolean;
     sigla: string;
     brasao: string;
     data: number;
     horario: number;
     name: string;
     rodada: string;
     status: string;
     slug: string;
     estadio: string;
     local: string;
     campeonato_id: number;
}

export const produtos: Rounds[] = [
     // { campeonato_id: 10, nome: "Campeonato Brasileiro", slug: "campeonato-brasileiro" }
] 

