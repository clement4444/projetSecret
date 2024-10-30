export function SetCamera(scene) {
    //position camera par defaut sur la map
    scene.cameras.main.scrollX = -window.innerWidth / 3.5;
    scene.cameras.main.scrollY = -window.innerHeight / 6;
}