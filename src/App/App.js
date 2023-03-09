import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"; 
import '../Css/App.css';
import { authContext } from "../Context/Auth";
import { useContext } from "react";
import {
   Formulaire, Accueil, LayoutProfile, LayoutNormal, Bible, Login, Load, 
   ListeBible, Details, Profile, AddBible, ListeAttente, Contact, ProfileListes, AddContact, UnityWindow, Scores, ProfileDetail, Search
} from "../Data/Data";

const App = () => {
  const {user, isLoading} = useContext(authContext);
  
  const routes = 
  !isLoading ?
  user ?
    [
      {
          path: "/",
          element: <LayoutProfile/>,
          children: [ 
            {
              index: true,
              element:<Navigate to='/profile' replace/>
            },
            {
              path: 'acceuil',
              element: <Accueil/>
            }, 
            {
              path: 'formulaire',
              element: <Formulaire/>
            },
            {
              path: 'scores',
              element: <Scores/>
            },
            {
              path: 'search',
              element: <Search/>
            },
            {
              path: 'jeux',
              element: <Bible/>,
              children: [
                {
                  index: true,
                  element: <Navigate to="/all"/>,
                },
                {
                  path: 'all',
                  element: <ListeBible/>
                },
                {
                  path: ':jeuId',
                  element: <Details/>,
                  children: [
                    {
                        index: true,
                        element: < Navigate to='/jeux/:jeuId/' />
                    },
                ]
                },
                {
                  path: 'add',
                  element: <AddBible/>
                },
                {
                  path:'attente',
                  element: <ListeAttente/>
                }

              ]
            },
            {
              path:'profile',
              element: <Profile/>,
            },
            {
              path:'scores',
              element: <Scores/>
            },
            {
              path: '*',
              element: <Navigate to='/' replace/>,
            },
          ]
        }
    ]
    :
    [
      {
        path: "/",
        element: <LayoutNormal/>,
        children: [
          {
            index: true,
            element: <Navigate to='/login' replace/>,
          },
          {
            path:'login',
            element: <Login/>,
          },
          {
            path: '*',
            element: <Navigate to='/' replace/>,
          },
        ]
      }
    ]
    : 
    [
      {
        path: "/",
        element: <LayoutNormal/>,
        children: [
          {
            index: true,
            element: <Navigate to='/load' replace/>,
          },
          {
            path:'load',
            element: <Load/>,
          },
          {
            path: '*',
            element: <Navigate to='/' replace/>,
          },
        ]
      }
    ]
    
    
    return (

      <RouterProvider router={createBrowserRouter(routes)}/>

      );
    }
    export default (App);
