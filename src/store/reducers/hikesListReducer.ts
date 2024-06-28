import { createReducer, createAction } from '@reduxjs/toolkit';
import { Hike } from '../../@types/hike';

export type HikesList = {
  list: Hike[];
};

// 3a - on définit l'initialState + typage
const initialState: HikesList = {
  list: [
    {
      id: 1,
      title: 'un titre',
      pictures: 'www.photo.com',
      details: 'une super randonnée qui est géniale',
      distance: 5,
      time: 90,
      difficulty: 'easy',
      localisation: 'Bouches du Rhône',
      gps_coordinate: {
        type: 'LineString',
        coordinates: [
          [1.5686988, 5.2656893],
          [1.5686988, 5.2656893],
          [1.5686988, 5.2656893],
          [1.5686988, 5.2656893],
          [1.5686988, 5.2656893],
          [1.5686988, 5.2656893],
          [1.5686988, 5.2656893],
        ],
      },
    },
    {
      id: 2,
      title: 'un titre',
      pictures: 'www.photo.com',
      details: 'une super randonnée qui est géniale',
      distance: 5,
      time: 90,
      difficulty: 'easy',
      localisation: 'Bouches du Rhône',
      gps_coordinate: {
        type: 'LineString',
        coordinates: [
          [1.5686988, 5.2656893],
          [1.5686988, 5.2656893],
          [1.5686988, 5.2656893],
          [1.5686988, 5.2656893],
          [1.5686988, 5.2656893],
          [1.5686988, 5.2656893],
          [1.5686988, 5.2656893],
        ],
      },
    },
  ],
};

// ordre pour ajouter un message à la liste
export const displayHikes = createAction<string>('LIST/DISPLAY_HIKES');

// 3b - on crée le reducer
export const hikesListReducer = createReducer(initialState, (builder) => {
  // nouvel ordre
  builder.addCase(displayHikes, (state, action) => {
    console.log(state.list);
  });
});
