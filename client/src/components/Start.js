import React, {Component} from 'react';

class Start extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="start">
                <div class="l-Title">
                    <p>All you need is love!</p>
                </div>
                <div id="l-Text" class="l-Text">
                    <a>Влюбленные оставляют замки на мосту, чтобы символизировать их любовь. 
                        Муниципальные власти снимают их, что нарушает обещание вечной любви.
                        LoveLock здесь, чтобы любовь была вечной. Это просто!</a>
                </div>
                <div>
                    <table class="tbl">
                        <tr>
                            <td>
                                <img src="../style/img/settings.png"></img>
                            </td>
                            <td>
                                <img src="../style/img/settings.png" width="40px"></img>
                            </td>
                            <td>
                                <img src="../style/img/key.png" width="40px"></img>
                            </td>
                        </tr>
                        <tr>
                        <td>
                            <p>Выбери замочек</p>
                        </td>
                        <td>
                            <p>Модернизируй его</p>
                        </td>
                        <td>
                            <p>Повесь свой замочек на мост</p>
                        </td>
                    </tr>
            </table>
        </div>
      </div>
        );
    }    

}

export default Start;


