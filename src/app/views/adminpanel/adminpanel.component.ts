import { Component, OnInit } from '@angular/core';
import bootstrap, { Tooltip } from 'bootstrap';
import { RadarController } from 'chart.js';
import { Chart } from 'chart.js';
import { ChartLineComponent } from '../chart-line/chart-line.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ChartRadarComponent } from '../chart-radar/chart-radar.component';
import { ChartPieComponent } from '../chart-pie/chart-pie.component';

interface Empresa {
  nombre: string;
  tipoEmpresa: string;
  sector: string;
  razonSocial: string;
}

@Component({
  selector: 'app-adminpanel',
  standalone: true,
  imports: [ChartLineComponent, ChartRadarComponent, ChartPieComponent, ChartRadarComponent],
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Inicializa tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map((tooltipTriggerEl) => new Tooltip(tooltipTriggerEl));
      
      
  }


 
  
}

