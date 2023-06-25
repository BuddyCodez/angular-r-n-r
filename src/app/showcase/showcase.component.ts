import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent {
  cartype: string | null | undefined;
  allCards = [
    {
      id: "c1",
      imageSrc: "/assets/swiftdzire.jpg",
      badge: "Cheap",
      title: "Swift Dzire",
      engine: "1.2 L-4-cylinder",
      fuel: "Petrol",
      fuelCapacity: "55L",
      seats: "4-5",
      price: "4500/day",
      transmissionId: "transmission",
      buttonId: "transmission",
      type: "sydens"
    },
    {
      id: "c2",
      imageSrc: "/assets/aura.jpg",
      badge: "Cheap",
      title: "Aura",
      engine: "1.2 L-4-cylinder",
      fuel: "Petrol",
      fuelCapacity: "55L",
      seats: "4-5",
      price: "4500/day",
      transmissionId: "transmissionaura",
      buttonId: "transmissionaura",
      type: "sydens"

    },
    {
      id: "c3",
      imageSrc: "/assets/amaze.jpg",
      badge: "Cheap",
      title: "Honda Amaze",
      engine: "1.2 L-4-cylinder",
      fuel: "Petrol",
      fuelCapacity: "16L",
      seats: "4-5",
      price: "4500/day",
      transmissionId: "transmissionamaze",
      buttonId: "transmissionamaze",
      type: "sydens"

    },
    {
      id: "c4",
      imageSrc: "/assets/ciaz.jpg",
      badge: "Midrange",
      title: "Ciaz",
      engine: "1.5 L-4-cylinder",
      fuel: "Petrol",
      fuelCapacity: "43L",
      seats: "4-5",
      price: "5500/day",
      transmissionId: "transmissionciaz",
      buttonId: "transmissionciaz",
      type: "sydens"

    },
    {
      id: "c5",
      imageSrc: "/assets/verna.jpg",
      badge: "Midrange",
      title: "Verna",
      engine: "1.2 L-4-cylinder-Diesel",
      fuel: "Diesel",
      fuelCapacity: "45L",
      seats: "4-5",
      price: "5500/day",
      transmissionId: "transmissionverna",
      buttonId: "transmissionverna",
      type: "sydens"

    },
    {
      id: "c6",
      imageSrc: "/assets/mercedesc.jpg",
      badge: "Expensive",
      title: "Mercedes C Class",
      engine: "2.0 L-4-cylinder-Diesel",
      fuel: "Diesel",
      fuelCapacity: "40-50L",
      seats: "4-5",
      price: "7000/day",
      transmissionId: "transmissionmercedes",
      buttonId: "transmissionmercedes",
      type: "sydens"

    },
    {
      id: "c7",
      imageSrc: "/assets/audi.jpg",
      badge: "Expensive",
      title: "Audi a5",
      engine: "2.0 L-4-TDL",
      fuel: "Petrol",
      fuelCapacity: "55L",
      seats: "4-5",
      price: "7000/day",
      transmissionId: "transmissionaudi",
      buttonId: "transmissionaudi",
      type: "sydens"

    },
    {
      id: "c1",
      imageSrc: "/assets/Hyundai-Creta-35.jpg",
      badge: "Cheap",
      title: "Hyundai Creta",
      engine: "1.6 L-4-cylinder-Petrol",
      fuel: "Petrol",
      fuelCapacity: "50L",
      seats: "5",
      price: "4500/day",
      transmissionId: "transmission",
      buttonId: "transmission",
      type: "suv",
    },
    {
      id: "c2",
      imageSrc: "/assets/bolero.jpg",
      badge: "Cheap",
      title: "Bolero",
      engine: "1.5 L-3-cylinder-Diesel",
      fuel: "Diesel",
      fuelCapacity: "60L",
      seats: "7",
      price: "4500/day",
      transmissionId: "transmission2",
      buttonId: "transmission2",
      type: "suv",
    },
    {
      id: "c3",
      imageSrc: "/assets/tuv.jpg",
      badge: "Cheap",
      title: "Mahindra Tuv",
      engine: "1.5 L-3-cylinder-Diesel",
      fuel: "Diesel",
      fuelCapacity: "50L",
      seats: "5",
      price: "4500/day",
      transmissionId: "transmission3",
      buttonId: "transmission3",
      type: "suv",
    },
    {
      id: "c4",
      imageSrc: "/assets/scorpio.jpg",
      badge: "Midrange",
      title: "Mahindra Scorpio",
      engine: "2.2 L-4-cylinder-Diesel",
      fuel: "Diesel",
      fuelCapacity: "60L",
      seats: "7",
      price: "5500/day",
      transmissionId: "transmission4",
      buttonId: "transmission4",
      type: "suv",
    },
    {
      id: "c5",
      imageSrc: "/assets/verna.jpg",
      badge: "Midrange",
      title: "Verna",
      engine: "1.2 L-4-cylinder-Diesel",
      fuel: "Diesel",
      fuelCapacity: "45L",
      seats: "4-5",
      price: "5500/day",
      transmissionId: "transmissionverna",
      buttonId: "transmissionverna",
      type: "suv",
    },
    {
      id: "1",
      imageSrc: "/assets/alto.jpg",
      badge: "Cheap",
      title: "Maruti Suzuki Alto 800",
      engine: "",
      fuel: "",
      fuelCapacity: "",
      seats: "",
      price: "4500/day",
      transmissionId: "transmission",
      buttonId: "transmission",
      type: "hatchbacks",
    },
    {
      id: "2",
      imageSrc: "/assets/swift-bg.jpg",
      badge: "Cheap",
      title: "Maruti Suzuki Swift",
      engine: "",
      fuel: "",
      fuelCapacity: "",
      seats: "",
      price: "4500/day",
      transmissionId: "transmission2",
      buttonId: "transmission2",
      type: "hatchbacks",
    },
    {
      id: "3",
      imageSrc: "/assets/grandi10.jpg",
      badge: "Midrange",
      title: "Hyundai Grand i10",
      engine: "",
      fuel: "",
      fuelCapacity: "",
      seats: "",
      price: "5500/day",
      transmissionId: "transmission3",
      buttonId: "transmission3",
      type: "hatchbacks",
    },
    {
      id: "4",
      imageSrc: "/assets/i20.jpg",
      badge: "Midrange",
      title: "Hyundai i20",
      engine: "",
      fuel: "",
      fuelCapacity: "",
      seats: "",
      price: "5500/day",
      transmissionId: "transmission4",
      buttonId: "transmission4",
      type: "hatchbacks",
    },
    {
      id: "44",
      imageSrc: "/assets/tata altroz.jpg",
      badge: "Midrange",
      title: "Tata Altroz",
      engine: "",
      fuel: "",
      fuelCapacity: "",
      seats: "",
      price: "5500/day",
      transmissionId: "transmission44",
      buttonId: "transmission44",
      type: "hatchbacks",
    }, 
    {
      id: "1",
      imageSrc: "/assets/omni.jpg",
      badge: "Cheap",
      title: "Maruti Suzuki Omni",
      engine: "",
      fuel: "",
      fuelCapacity: "",
      seats: "",
      price: "4500/day",
      transmissionId: "transmission",
      buttonId: "transmission",
      type: "minivans"
    },
    {
      id: "2",
      imageSrc: "/assets/eeco.jpg",
      badge: "Cheap",
      title: "Maruti Suzuki Eeco",
      engine: "",
      fuel: "",
      fuelCapacity: "",
      seats: "",
      price: "4500/day",
      transmissionId: "transmission2",
      buttonId: "transmission2",
      type: "minivans"
    },
    {
      id: "3",
      imageSrc: "/assets/ertiga.jpg",
      badge: "Midrange",
      title: "Maruti Suzuki Ertiga",
      engine: "",
      fuel: "",
      fuelCapacity: "",
      seats: "",
      price: "5500/day",
      transmissionId: "transmission3",
      buttonId: "transmission3",
      type: "minivans"
    },
    {
      id: "4",
      imageSrc: "/assets/xl6.jpg",
      badge: "Midrange",
      title: "Maruti Suzuki Xl6",
      engine: "",
      fuel: "",
      fuelCapacity: "",
      seats: "",
      price: "5500/day",
      transmissionId: "transmission4",
      buttonId: "transmission4",
      type: "minivans"
    },
    {
      id: "5",
      imageSrc: "/assets/kia-carnival.jpg",
      badge: "Expensive",
      title: "Kia Carnival",
      engine: "",
      fuel: "",
      fuelCapacity: "",
      seats: "",
      price: "7000/day",
      transmissionId: "transmission5",
      buttonId: "transmission5",
      type: "minivans"
    },
    {
      id: "6",
      imageSrc: "/assets/innova.jpeg",
      badge: "Expensive",
      title: "Toyota Innova Crysta",
      engine: "",
      fuel: "",
      fuelCapacity: "",
      seats: "",
      price: "7000/day",
      transmissionId: "transmission6",
      buttonId: "transmission6",
      type: "minivans"
    }
  ];
  cards: any= [];
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const query = params.get('query');
      console.log('Showcase parameter:', query);
      this.cartype = query ;
      if(!this.cartype) {
        this.cartype = 'sydens';
      }
      this.cards = this.allCards.filter(card => card.type === this.cartype);

    });
    // Use the 'cartype' value as needed in your component
  }
   
  rentCar(transmissionId: string, carPrice: string, carName: string, carImg: string) {
    var isLogged = localStorage.getItem('isLoggedIn');
    var selectElement = document.getElementById(transmissionId) as HTMLSelectElement;

    // Get the selected option index
    var selectedIndex = selectElement?.selectedIndex ?? -1;

    // Get the selected option value
    var selectedOption = selectedIndex !== -1 ? selectElement?.options[selectedIndex]?.value : null;
    var transmission =selectedOption;
    if (!isLogged) return alert('Please login to rent a car');
    window.location.href = "/payment?cname="+carName+"&cimg="+carImg+"&cprice="+carPrice+"&ctransmission="+transmission;
  }
}
