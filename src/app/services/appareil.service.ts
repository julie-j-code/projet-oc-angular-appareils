export class AppareilService {

    appareils = [
        {
        name:"Machine à laver",
        status:"éteint"},
        {
        name:"four",
        status:"allumé"},
      {
        name:"ordinateur",
          status:"éteint"}
        ];

        switchOnAll() {
            for(let appareil of this.appareils) {
              appareil.status = 'allumé';
            }
        }
        
        switchOffAll() {
            for(let appareil of this.appareils) {
              appareil.status = 'éteint';
            }
        }
  
}