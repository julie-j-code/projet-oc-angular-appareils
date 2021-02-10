export class AppareilService {

    appareils = [
        {
        id:1,
        name:"Machine à laver",
        status:"éteint"},
        {
        id:2,
        name:"four",
        status:"allumé"},
      {
        id:3,
        name:"ordinateur",
        status:"éteint"}
        ];

        getAppareilById(id: number) {
          const appareil = this.appareils.find(
            (s) => {
              return s.id === id;
            }
          );
          return appareil;
      }

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

        switchOnOne(i: number) {
          this.appareils[i].status = 'allumé';
      }
      
      switchOffOne(i: number) {
          this.appareils[i].status = 'éteint';
      }

      
  
}