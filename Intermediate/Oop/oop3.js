// Interator interface
class Matrix{
  constructor(width,height,element = (x,y) => undefined){
    this.width = width;
    this.height = height;
    this.content = [];

    for(let y = 0; y<height;y++){
      for(let x = 0; x<width;x++)
      {
        this.content[y*width + x] = element(x,y);
      }
    }
  }

  get(x,y){
    return this.content[y*width + x];
  }
}
