import { Unity, useUnityContext } from "react-unity-webgl";

const UnityWindow = ({dossier}) =>{
    const { unityProvider } = useUnityContext({
        loaderUrl: "/Build/"+dossier+".loader.js",
        dataUrl: "/Build/"+dossier+".data",
        frameworkUrl: "/Build/"+dossier+".framework.js",
        codeUrl: "/Build/"+dossier+".wasm",
    })
    console.log(dossier);

    return (
        <Unity unityProvider={unityProvider} style={{ width: 960, height: 600 }} />
      );
}
export default(UnityWindow);