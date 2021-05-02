import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import speaker from '../assets/speaker.json';

@customElement("briques-poster")
export class BriquesPoster extends LitElement {

  @property() title = 'Briques du Web';

  @property() episode = speaker.episode;

  render() {
    return html`
      <main>
        <div class="left-side">
            <div class="logo">
              <img src="assets/logo_color_text_square.png">
            </div>
            <div class="whichwhen">
                <div class="which">
                  <h2>${this.episode}</h2>
                </div>
                <div class="when">
                    <h4 class="space">Mardi 27/04</h4>
                    <h4>12h15</h4>
                </div>
            </div>

        </div>
        <div class="right-side">
          <div class="title">
            <h5>Design Systems, autonomie et créativité</h5>
            <h6>Retour d'expérience de Decathlon</h6>
          </div>
          <div class="speaker">
            <div class="speakerface">
              <img src="assets/speakers/laurent_thiebault.png">
            </div>
            <div class="speakerinfo">
              <h5>Laurent Thiebault</h5>
              <h5>@lauthieb</h5>
            </div>
          </div>
          <div class="twitch">
            <h6>https://www.twitch.tv/rdvspeakers</h6>
          </div>

        </div>
      </main>
    `;
  }

  static styles = css`

    h2, h3, h4, h5, h6, h7{
      margin: 0;
      padding: 0;
    }

    :host {
      text-align: center;
      font-size : 6rem;
      font-family: "Comic Sans MS", "Comic Sans", cursive;
      color: white;

      display: inline-block;
      width: 1920px;
      height: 1080px;
      background-image: url("assets/brick5.jpeg");
      background-repeat: repeat;
      background-size: auto;
      opacity:0.9;
    }

    main {
      display: flex;
      width: 100%;
      height:100%;
    }

    .left-side{
      flex: 0 0 40%;
      display: flex;
      flex-direction: column;
    }

    .right-side{
      flex: 0 0 60%;
      display:flex;
      flex-direction: column;
    }

    .logo{
      flex: 0 0 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .logo img{
      width:80%;
      object-fit:contain;
    }

    .whichwhen{
      flex: 0 0 50%;
      display: flex;
      flex-direction: column;
    }

    .which{
      flex: 0 0 30%;
      display:flex;
      align-items: center;
      justify-content: center;
    }

    .when{
      flex: 0 0 70%;
    }

    .when .space{
      margin-top:5%;
    }

    .title{
      flex: 0 0 40%;

      display:flex;
      flex-direction:column;
      align-items: center;
      justify-content: center;
    }

    .speaker{
      flex: 0 0 30%;
      display:flex;
      flex-direction:row;
    }

    .speakerface{
      flex: 0 0 30%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .speakerface img{
      max-width:80%;
      max-height:80%;
      border-radius: 50%;
      border: 10px solid white;
      background-color: white;
    }

    .speakerinfo{
      flex: 0 0 70%;

      display:flex;
      flex-direction:column;
      align-items: center;
      justify-content: center;
    }

    .twitch{
      flex: 0 0 30%;
      display:flex;
      align-items: center;
      justify-content: center;
    }
  `;
}
