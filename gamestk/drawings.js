const DRAWINGS = {

  animals:[
    {
      title:"Kucing",

      draw(ctx,w,h,filled){

        ctx.clearRect(0,0,w,h);

        ctx.lineWidth = 5;
        ctx.strokeStyle = "black";

        ctx.beginPath();
        ctx.arc(w/2,h/2,120,0,Math.PI*2);
        ctx.stroke();

        if(filled){
          ctx.fillStyle = "orange";
          ctx.fill();
        }

      }
    }
  ],

  house:[
    {
      title:"Rumah",

      draw(ctx,w,h,filled){

        ctx.clearRect(0,0,w,h);

        ctx.lineWidth = 5;

        ctx.strokeRect(
          w/2-120,
          h/2-100,
          240,
          200
        );

        ctx.beginPath();

        ctx.moveTo(w/2-150,h/2-100);

        ctx.lineTo(w/2,h/2-220);

        ctx.lineTo(w/2+150,h/2-100);

        ctx.closePath();

        ctx.stroke();

        if(filled){

          ctx.fillStyle="orange";

          ctx.fillRect(
            w/2-120,
            h/2-100,
            240,
            200
          );

        }

      }
    }
  ],

  landscape:[
    {
      title:"Pelangi",

      draw(ctx,w,h,filled){

        ctx.clearRect(0,0,w,h);

        const colors = [
          "red",
          "orange",
          "yellow",
          "green",
          "blue"
        ];

        colors.forEach((c,i)=>{

          ctx.beginPath();

          ctx.strokeStyle = c;

          ctx.lineWidth = 20;

          ctx.arc(
            w/2,
            h/2+100,
            200-(i*25),
            Math.PI,
            0
          );

          ctx.stroke();

        });

      }
    }
  ],

  vehicle:[
    {
      title:"Mobil",

      draw(ctx,w,h,filled){

        ctx.clearRect(0,0,w,h);

        ctx.lineWidth=5;

        ctx.strokeRect(
          w/2-150,
          h/2-60,
          300,
          120
        );

        ctx.beginPath();

        ctx.arc(
          w/2-90,
          h/2+70,
          40,
          0,
          Math.PI*2
        );

        ctx.stroke();

        ctx.beginPath();

        ctx.arc(
          w/2+90,
          h/2+70,
          40,
          0,
          Math.PI*2
        );

        ctx.stroke();

      }
    }
  ]

}