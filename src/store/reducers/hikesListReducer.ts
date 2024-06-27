import { createReducer, createAction } from '@reduxjs/toolkit';

export type HikesList = {
  list: Hike[];
};

// 3a - on définit l'initialState + typage
const initialState: HikesList = {
  list: [
    {
      id: 1,
      title: 'un titre',
      photo: 'www.photo.com',
      content: 'une super randonnée qui est géniale',
      distance: 5,
      time: 90,
      difficulty: 'easy',
      localisation: '13 - Bouches du Rhône',
      coords: [
        {
          lat: 1.5686988,
          lng: 5.2656893,
        },
        {
          lat: 56.5686988,
          lng: 34.2656893,
        },
      ],
    },
  ],
};

// ordre pour ajouter un message à la liste
export const displayHikes = createAction<string>('LIST/DISPLAY_HIKES');

// 3b - on crée le reducer
export const hikesListReducer = createReducer(initialState, (builder) => {
  // nouvel ordre
  builder.addCase(displayHikes, (state, action) => {});
});
