// export class iRounds {
 
//         id = 10;
//         nome = "string";
//         status = "string";
//         time_mandante = "string";
//         time_visitante = "string"
//         rodadaId = 0;
//         url = "string";
//         placar = "string";
//         partida_id = 0;
//         placar_mantante = 0;
//         placar_visitante = 0;
//         _link = "boolean";
//         sigla = "string";
//         brasao = "string";
//         data = "number";
//         horario = "number";
//         name = "string";
//         rodada = 0;
//         slug = "string";
//         estadio = "string";
//         local = "string";
//         campeonato_id = "number";
//         campeonato = "string";
//     }


export interface iRound {
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
     campeonato_id: 10;
     campeonato: string;
     proxima_rodada: string;
     rodada_anterior: string;
}
    
