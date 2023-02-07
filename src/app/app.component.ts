import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public cards:Array<any>=[]
  title = 'Proyecto-CD';
  ngOnInit(): void {
    this.cards=[
      {
        title:"Mix Reggueton",
        subtitle:"por: palafoxMix",
        descripcion:"Producida: Discos bam bam",
        an:"2001",
        dato:"Audio CD",
        img: "https://yt3.ggpht.com/-MyG1WlGk01q6QZ3OpKt11rxQADen7Cqap1JMDZD1hJhCChGRKp-jedRql_d0Y39yyWesTB2jg=s576"
      },
      {
        title:"Mix para Bellakear",
        subtitle:"lo mas puerco en el mercado",
        descripcion:"bad bunny ",
        an:"2019",
        dato:"Audio CD",
        img: "https://yt3.ggpht.com/g-cWmumTQWox6UTUEhtahvvbtpoUfxZY-18yNjvIL0QDnuPd8fKLnuhcvjB-L4vxqV15iU5Oh3A=s576"
      },
      {
        title:"mix puercote",
        subtitle:"Producciones margarito",
        descripcion:"Rca Records",
        an:"2018",
        dato:"Audio CD",
        img: "https://i1.sndcdn.com/artworks-000528683124-pjzuit-t500x500.jpg"
      },
      {
        title:"Highway To Hell",
        subtitle:"AC/DC",
        descripcion:"Atlantic Records",
        an:"1979",
        dato:"Audio CD",
        img: "https://m.media-amazon.com/images/I/71ov-DhyciL._AC_SL1310_.jpg"
      },
      {
        title:"mix puercote",
        subtitle:"Producciones margarito",
        descripcion:"Rca Records",
        an:"2018",
        dato:"Audio CD",
        img: "https://yt3.ggpht.com/hwSjZy-WG_0DTBoJmDbcopSjB1H1SDmUdSDDuMfiSyLCrkVKdqJDzIpiONjQP_FOATFhVkeMr5M=s576"
      },
      {
        title:"bella kat",
        subtitle:"Producciones margarito",
        descripcion:"Rca Records",
        an:"2018",
        dato:"Audio CD",
        img: "https://i.scdn.co/image/ab67706c0000da84579cea76fa6e2e599178e5b3"
      },
      {
        title:"domelipa",
        subtitle:"Producciones margarito",
        descripcion:"Rca Records",
        an:"2018",
        dato:"Audio CD",
        img: "https://i1.sndcdn.com/artworks-97Wzb6zVsKfOamB0-QwdnLQ-t500x500.jpg"
      },
      {
        title:"anuel aa",
        subtitle:"Producciones margarito",
        descripcion:"Rca Records",
        an:"2018",
        dato:"Audio CD",
        img: "https://i1.sndcdn.com/artworks-UVgZbZyZUpwEGyBU-xRRVzg-t500x500.jpg"
      },
      {
        title:"mix puercote",
        subtitle:"Producciones margarito",
        descripcion:"Rca Records",
        an:"2018",
        dato:"Audio CD",
        img: "data:image/jpeg;base64,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"
      },
      {
        title:"mix puercote",
        subtitle:"Producciones margarito",
        descripcion:"Rca Records",
        an:"2018",
        dato:"Audio CD",
        img: "https://i1.sndcdn.com/artworks-000665491666-5hiujz-t500x500.jpg"
      },
      {
        title:"mix puercote",
        subtitle:"Producciones margarito",
        descripcion:"Rca Records",
        an:"2018",
        dato:"Audio CD",
        img: "https://i.scdn.co/image/ab67706c0000da84a8d9772ff184794940734844"
      },
      {
        title:"mix puercote",
        subtitle:"Producciones margarito",
        descripcion:"Rca Records",
        an:"2018",
        dato:"Audio CD",
        img: "https://i.scdn.co/image/ab67706c0000da84b2cd4a59fc45065040eb1c7e"
      },
      {
        title:"mix puercote",
        subtitle:"Producciones margarito",
        descripcion:"Rca Records",
        an:"2018",
        dato:"Audio CD",
        img: "https://lanoticia.com/wp-content/uploads/2021/08/J-Balvin-800x600.jpg?crop=1"
      },
      {
        title:"mix puercote",
        subtitle:"Producciones margarito",
        descripcion:"Rca Records",
        an:"2018",
        dato:"Audio CD",
        img: "https://yt3.ggpht.com/UDwVMlDgJB9I2p1U3SE2Y5UxFzx0jTAR7PoBIOlO8XtXhhP2TVr1zFtlOIVyg3yAwBbC48LbTQ=s576"
      },
      {
        title:"mix puercote",
        subtitle:"Producciones margarito",
        descripcion:"Rca Records",
        an:"2018",
        dato:"Audio CD",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrv_xUBD4ZcofhnKt7pHFarxDFtlRw0zBIug&usqp=CAU"
      },
      {
        title:"mix puercote",
        subtitle:"Producciones margarito",
        descripcion:"Rca Records",
        an:"2018",
        dato:"Audio CD",
        img: "https://p16.resso.me/img/tos-alisg-v-2102/d10f9484f77b452382b4a1265392a248~c5_500x500.jpg"
      },
      {
        title:"mix puercote",
        subtitle:"Producciones margarito",
        descripcion:"Rca Records",
        an:"2018",
        dato:"Audio CD",
        img: "https://yt3.ggpht.com/LHxrsmh0up8oujgugZRERag_L-hO0U8IB1I1a4Dbvrwxq2-AcYw3hijkRYZ4mpr9imPeN1FqWPIl=s576"
      },
      {
        title:"mix puercote",
        subtitle:"Producciones margarito",
        descripcion:"Rca Records",
        an:"2018",
        dato:"Audio CD",
        img: "https://cdn.shopify.com/s/files/1/1108/3646/products/61U8dk4pjcL_580x.jpg?v=1613608494"
      },
      {
        title:"mix puercote",
        subtitle:"Producciones margarito",
        descripcion:"Rca Records",
        an:"2018",
        dato:"Audio CD",
        img: "https://yt3.ggpht.com/dSE5WWRWCrFE5eAeMhtakNkik_OUfOENfMGnuiFYvHx5klm8rna_ZEzhuPwhKm96EuYccnivSUd9=s576"
      },
      {
        title:"mix puercote",
        subtitle:"Producciones margarito",
        descripcion:"Rca Records",
        an:"2018",
        dato:"Audio CD",
        img: "https://w7.pngwing.com/pngs/309/863/png-transparent-hot-space-queen-album-lp-record-phonograph-record-queen-album-text-poster.png"
      },
      {
        title:"mix puercote",
        subtitle:"Producciones margarito",
        descripcion:"Rca Records",
        an:"2018",
        dato:"Audio CD",
        img: "https://i.pinimg.com/originals/73/81/59/738159481b863c087945530f9dd422ac.jpg"
      },
      {
        title:"mix puercote",
        subtitle:"Producciones margarito",
        descripcion:"Rca Records",
        an:"2018",
        dato:"Audio CD",
        img: "https://i.scdn.co/image/ab67706c0000da84b1013abec2c161d0d092c43f"
      },
      {
        title:"mix puercote",
        subtitle:"Producciones margarito",
        descripcion:"Rca Records",
        an:"2018",
        dato:"Audio CD",
        img: "https://i.pinimg.com/originals/aa/e1/9d/aae19d429bbbe5de56d96138f8f75d26.jpg"
      },
      {
        title:"mix puercote",
        subtitle:"Producciones margarito",
        descripcion:"Rca Records",
        an:"2018",
        dato:"Audio CD",
        img: "https://i1.sndcdn.com/artworks-000184085329-xkwudw-t500x500.jpg"
      }
    ]
  }
}
