import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.scss'],
  providers: [MessageService]
})
export class BetsComponent {
  constructor(private messageService: MessageService) {}

  showTopCenter() {
    this.messageService.add({ key: 'tc', severity: 'success', summary: 'sucesso', detail: 'Placar Salvo' });
  }
}
