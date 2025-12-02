import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient, HttpResponse, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import {Location,LocationStrategy} from "@angular/common";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private httpClient:HttpClient, private location:Location,private locationStrategy:LocationStrategy){}

  //private baseURL:string='http://localhost:8080';
  private baseURL:string=this.location.path();

  private getUrl:string = this.baseURL + '/room/reservation/v1/';
  private postUrl:string = this.baseURL + '/room/reservation/v1';
  public submitted!:boolean;
  roomsearch! : FormGroup;
  rooms! : Room[];
  request!:ReserveRoomRequest;
  currentCheckInVal!:string;
  currentCheckOutVal!:string;

  welcomeMessages: string[] = [];
  presentationTime: string = '';

  ngOnInit(){
    this.roomsearch= new FormGroup({
      checkin: new FormControl(' '),
      checkout: new FormControl(' ')
    });

    this.getWelcomeMessages();
    this.getPresentationTime();

    const roomsearchValueChanges$ = this.roomsearch.valueChanges;

    roomsearchValueChanges$.subscribe(x => {
      this.currentCheckInVal = x.checkin;
      this.currentCheckOutVal = x.checkout;
    });
  }

  getWelcomeMessages() {
    this.httpClient.get<string[]>(this.baseURL + '/api/welcome')
      .subscribe(
        (data) => {
          this.welcomeMessages = data;
        },
        (error) => {
          console.error('Error fetching welcome messages:', error);
        }
      );
  }

  getPresentationTime() {
    this.httpClient.get(this.baseURL + '/api/presentation', { responseType: 'text' })
      .subscribe(
        (data) => {
          this.presentationTime = data as string;
        },
        (error) => {
          console.error('Error fetching presentation time:', error);
        }
      );
  }

  onSubmit({value,valid}:{value:Roomsearch,valid:boolean}){
    this.getAll().subscribe(
      rooms => {
        console.log(Object.values(rooms)[0]);
        this.rooms=<Room[]>Object.values(rooms)[0];
      }
    );
  }

  reserveRoom(value:string){
    this.request = new ReserveRoomRequest(value, this.currentCheckInVal, this.currentCheckOutVal);
    this.createReservation(this.request);
  }

  createReservation(body:ReserveRoomRequest) {
    let bodyString = JSON.stringify(body);
    let headers = new Headers({'Content-Type': 'application/json'});

    const options = {
      headers: new HttpHeaders().append('key', 'value'),
    }

    this.httpClient.post(this.postUrl, body, options)
      .subscribe(res => console.log(res));
  }

  getAll(): Observable<any> {
    return this.httpClient.get(this.baseURL + '/room/reservation/v1?checkin='+ this.currentCheckInVal + '&checkout='+this.currentCheckOutVal, {responseType: 'json'});
  }

}

export interface Roomsearch{
  checkin:string;
  checkout:string;
}

export interface Room{
  id:string;
  roomNumber:string;
  price:string;
  links:string;
}

export class ReserveRoomRequest {
  roomId:string;
  checkin:string;
  checkout:string;

  constructor(roomId:string,
              checkin:string,
              checkout:string) {

    this.roomId = roomId;
    this.checkin = checkin;
    this.checkout = checkout;
  }
}
