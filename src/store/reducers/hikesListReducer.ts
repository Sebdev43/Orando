import { createReducer, createAction } from '@reduxjs/toolkit';
import { Hike } from '../../@types/hike';

export type HikesList = {
  list: Hike[];
};

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

export const getAllHikes = createAction<string>('LIST/DISPLAY_HIKES');

//TODO Il va falloir utiliser l'apiThunk pour charger la liste de randonnées dans le state

export const hikesListReducer = createReducer(initialState, (builder) => {
  builder.addCase(getAllHikes, (state, action) => {
    console.log(state.list);
  });
});
