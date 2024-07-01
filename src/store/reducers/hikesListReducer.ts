import { createReducer, createAction } from '@reduxjs/toolkit';
import { Hike } from '../../@types/hike';

export type HikesList = {
  list: Hike[];
};

const initialState: HikesList = {
  list: [
    {
      id: 1,
      slug: 'la-randonnee-du-rhone',
      title: 'La Randonnée du Rhône',
      pictures: 'www.photo.com',
      details: 'Une agréable rando qui mérite le (dé)tour',
      distance: 5,
      time: 120,
      difficulty: 'Facile',
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
      slug: 'encore-une-randonnee-en-montagne',
      title: 'Encore une rondade en montagne',
      pictures: 'www.photo.com',
      details:
        'Une super randonnée qui est géniale, avec des points de vue complètements dingos',
      distance: 47,
      time: 720,
      difficulty: 'Difficile',
      localisation: 'Auvergne',
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

export const getAllHikes = createAction<string>('LIST/DISPLAY_HIKES');

//TODO Il va falloir utiliser l'apiThunk pour charger la liste de randonnées dans le state

export const hikesListReducer = createReducer(initialState, (builder) => {
  builder.addCase(getAllHikes, (state, action) => {
    console.log(state.list);
  });
});
