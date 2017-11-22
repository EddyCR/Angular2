import { Component } from '@angular/core';

@Component({
	selector: 'download',
	template: `<div>
				<p>Descargando....</p>
				<div class="barra" [style.width]="progress_precent"></div>
			</div>`,
	styles: [`.barra{
					height: 10px;
					width: 0%;
					background: #e50914;
				}`]
})

export class DownloadComponent{
	progress: number = 0;
	progress_precent: string = '0%';
	
	iniciar(){
		this.progress = 0;
		let s = setInterval(()=>{		
			if(this.progress <= 100){	
				this.progress_precent = this.progress++ + '%';
			}else{
				clearInterval(s);
			}
		}, 30);
	}
}