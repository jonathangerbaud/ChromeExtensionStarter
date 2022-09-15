// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

export function App() {
  return (
    <div className="App bg-slate-100 h-screen flex items-center place-content-center">
      <div className="bg-white rounded shadow w-80">
        <div className="p-3 flex flex-row items-center">
          <img src="assets/icon192.png" className="h-10 mr-3" />
          <div className="flex flex-col items-start">
            <div className="text-md text-slate-800 font-medium">React App with TailwindCSS</div>
            <div className="text-sm text-slate-500">Chrome Starter Extension</div>
          </div>
        </div>

        <img src="assets/card-image.jpg" />

        <div className="p-3 text-left mb-2">This is an example of a simple card component created with MUI</div>

        <div className="flex flex-row space-x-3 p-3 text-slate-700">
          <FavoriteIcon />
          <ShareIcon />
        </div>
      </div>
    </div>
  );
}

export default App;
