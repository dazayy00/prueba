workExperience : Array<any> = [];

constructor() { }

ngOnInit(): void {

let work1 = {
    fecha : "2017-2020",
    ubicacion: "Orizaba, ver",
    puesto: "tecnico",
    empresa: "game city",
    logros : [
      { descripcion: "Empleado del mes" },
      { descripcion: "... " },
    ]
  };

  this.workExperience.push(work1);
}