import { useState } from "react";
import translate from "translate";
export const Home = () => {
  const [translateData, setTranslateData] = useState();
  const submitHandler = async (e) => {
    e.preventDefault();
    const rawdata = e.target.rawdata.value;
    const from = e.target.from.value;
    const to = e.target.to.value;
    const data = await translate(rawdata, to);
    setTranslateData(data);

    console.log(from + to);
    console.log(translateData);
  };
  return (
    <div className="mainArea">
      <div class="container mt-5">
        <form onSubmit={submitHandler}>
          <div class="row">
            <div class="col col-6">
              <div class="row select1">
                <select name="from" id="from" class="mb-3">
                  <option name="en" selected value="en">
                    English
                  </option>
                  <option name="zh" value="zh">
                    Chinese
                  </option>
                  <option name="cs" value="cs">
                    Czech
                  </option>
                  <option name="nl" value="nl">
                    Dutch
                  </option>
                  <option name="fi" value="fi">
                    Finnish
                  </option>
                  <option name="fr" value="fr">
                    French
                  </option>
                  <option name="de" value="de">
                    German
                  </option>
                  <option name="hi" value="hi">
                    Hindi
                  </option>
                  <option name="hu" value="hu">
                    Hungarian
                  </option>
                  <option name="id" value="id">
                    Indonesian
                  </option>
                  <option name="it" value="it">
                    Italian
                  </option>
                  <option name="ja" value="ja">
                    Japanese
                  </option>
                  <option name="ko" value="ko">
                    Korean
                  </option>
                  <option name="pl" value="pl">
                    Polish
                  </option>
                  <option name="ru" value="ru">
                    Russian
                  </option>
                </select>
              </div>
              <div class="row textarea">
                <textarea
                  name="rawdata"
                  id=""
                  cols="30"
                  rows="10"
                  class="form-control  "
                ></textarea>
              </div>
            </div>
            <div class="col col-6 ml-4">
              <div class="row select">
                <select name="to" id="to" class="mb-3 select">
                  <option name="en" value="en">
                    English
                  </option>
                  <option name="zh" value="zh">
                    Chinese
                  </option>
                  <option name="cs" value="cs">
                    Czech
                  </option>
                  <option name="nl" value="nl">
                    Dutch
                  </option>
                  <option name="fi" value="fi">
                    Finnish
                  </option>
                  <option name="fr" value="fr">
                    French
                  </option>
                  <option name="de" value="de">
                    German
                  </option>
                  <option name="hi" selected value="hi">
                    Hindi
                  </option>
                  <option name="hu" value="hu">
                    Hungarian
                  </option>
                  <option name="id" value="id">
                    Indonesian
                  </option>
                  <option name="it" value="it">
                    Italian
                  </option>
                  <option name="ja" value="ja">
                    Japanese
                  </option>
                  <option name="ko" value="ko">
                    Korean
                  </option>
                  <option name="pl" value="pl">
                    Polish
                  </option>
                  <option name="ru" value="ru">
                    Russian
                  </option>
                </select>
              </div>
              <div class="row textarea">
                <textarea
                  name="translate"
                  id="translate"
                  value={translateData}
                  cols="30"
                  rows="10"
                  class="form-control"
                ></textarea>
              </div>
            </div>
          </div>

          <button class="btn btn-success form-control mt-4" type="submit">
            translate
          </button>
        </form>
      </div>
    </div>
  );
};
