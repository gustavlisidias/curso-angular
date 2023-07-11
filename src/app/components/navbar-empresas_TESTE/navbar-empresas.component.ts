import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-empresas',
  templateUrl: 'navbar-empresas.component.html',
  styleUrls: ['navbar-empresas.css']
})

export class NavbarEmpresasComponent {
  menuItems = [
    {
      id: 'interunion', label: 'INTERUNION', active: true, content: [
        { area: 'Comercial', setores: ['Vendas', 'Compras', 'Gerenciamento'] },
        { area: 'Controladoria', setores: ['Logísitica', 'Fiscal', 'Contabilidade', 'Financeiro'] },
        { area: 'Governança', setores: ['Recursos Humanos', 'Marketing', 'Administração'] }
      ]
    },
    {
      id: 'attica', label: 'ATTICA', active: false, content: [
        { area: 'Comercial 1', setores: ['Vendas', 'Compras', 'Gerenciamento'] },
        { area: 'Controladoria 1', setores: ['Logísitica', 'Fiscal', 'Contabilidade', 'Financeiro'] },
        { area: 'Governança 1', setores: ['Recursos Humanos', 'Marketing', 'Administração'] }
      ]
    },
    {
      id: 'desmet', label: 'DE SMET', active: false, content: [
        { area: 'Comercial 2', setores: ['Vendas', 'Compras', 'Gerenciamento'] },
        { area: 'Controladoria 2', setores: ['Logísitica', 'Fiscal', 'Contabilidade', 'Financeiro'] },
        { area: 'Governança 2', setores: ['Recursos Humanos', 'Marketing', 'Administração'] }
      ]
    },
    {
      id: 'ure', label: 'URE', active: false, content: [
        { area: 'Comercial 3', setores: ['Vendas', 'Compras', 'Gerenciamento'] },
        { area: 'Controladoria 3', setores: ['Logísitica', 'Fiscal', 'Contabilidade', 'Financeiro'] },
        { area: 'Governança 3', setores: ['Recursos Humanos', 'Marketing', 'Administração'] }
      ]
    },
    {
      id: 'iustz', label: 'IUSTZ', active: false, content: [
        { area: 'Comercial 4', setores: ['Vendas', 'Compras', 'Gerenciamento'] },
        { area: 'Controladoria 4', setores: ['Logísitica', 'Fiscal', 'Contabilidade', 'Financeiro'] },
        { area: 'Governança 4', setores: ['Recursos Humanos', 'Marketing', 'Administração'] }
      ]
    },
    {
      id: 'mfpart', label: 'MFPART', active: false, content: [
        { area: 'Comercial 5', setores: ['Vendas', 'Compras', 'Gerenciamento'] },
        { area: 'Controladoria 5', setores: ['Logísitica', 'Fiscal', 'Contabilidade', 'Financeiro'] },
        { area: 'Governança 5', setores: ['Recursos Humanos', 'Marketing', 'Administração'] }
      ]
    },
    {
      id: 'ontera', label: 'ONTERA', active: false, content: [
        { area: 'Comercial 6', setores: ['Vendas', 'Compras', 'Gerenciamento'] },
        { area: 'Controladoria 6', setores: ['Logísitica', 'Fiscal', 'Contabilidade', 'Financeiro'] },
        { area: 'Governança 6', setores: ['Recursos Humanos', 'Marketing', 'Administração'] }
      ]
    },
    {
      id: 'ufv', label: 'UFV', active: false, content: [
        { area: 'Comercial 7', setores: ['Vendas', 'Compras', 'Gerenciamento'] },
        { area: 'Controladoria 7', setores: ['Logísitica', 'Fiscal', 'Contabilidade', 'Financeiro'] },
        { area: 'Governança 7', setores: ['Recursos Humanos', 'Marketing', 'Administração'] }
      ]
    }
  ];

  setActive(item: any) {
    this.menuItems.forEach(menuItem => {
      menuItem.active = (menuItem.id === item.id);
    });
  }

  onClickSetor(valor: string): void {
    alert("Você clicou em: " + valor);
  }

}
