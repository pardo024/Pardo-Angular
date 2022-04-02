import { Injectable } from '@angular/core';
import {Pokemon}from './pokemon';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
   private pokemonList: Pokemon[]=[{
    nombre:'Charmander',
      pc:500
      },
      {
      nombre:'Squirtle',
      pc:650
      },
      {
        nombre:'Bulbasour',
        pc:700
      }
  
  ];
      get obtenerLista(){

        return [...this.pokemonList];
       }

  constructor() { }
  agregarPokemon(nuevoPokemon:Pokemon){
    this.pokemonList.push(nuevoPokemon);
  }
}
