/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 12891.0, "minX": 0.0, "maxY": 16427.0, "series": [{"data": [[0.0, 12891.0], [0.1, 12891.0], [0.2, 12891.0], [0.3, 12891.0], [0.4, 12891.0], [0.5, 12891.0], [0.6, 12891.0], [0.7, 12891.0], [0.8, 12891.0], [0.9, 12891.0], [1.0, 13327.0], [1.1, 13327.0], [1.2, 13327.0], [1.3, 13327.0], [1.4, 13327.0], [1.5, 13327.0], [1.6, 13327.0], [1.7, 13327.0], [1.8, 13327.0], [1.9, 13327.0], [2.0, 13509.0], [2.1, 13509.0], [2.2, 13509.0], [2.3, 13509.0], [2.4, 13509.0], [2.5, 13509.0], [2.6, 13509.0], [2.7, 13509.0], [2.8, 13509.0], [2.9, 13509.0], [3.0, 13607.0], [3.1, 13607.0], [3.2, 13607.0], [3.3, 13607.0], [3.4, 13607.0], [3.5, 13607.0], [3.6, 13607.0], [3.7, 13607.0], [3.8, 13607.0], [3.9, 13607.0], [4.0, 13707.0], [4.1, 13707.0], [4.2, 13707.0], [4.3, 13707.0], [4.4, 13707.0], [4.5, 13707.0], [4.6, 13707.0], [4.7, 13707.0], [4.8, 13707.0], [4.9, 13707.0], [5.0, 13829.0], [5.1, 13829.0], [5.2, 13829.0], [5.3, 13829.0], [5.4, 13829.0], [5.5, 13829.0], [5.6, 13829.0], [5.7, 13829.0], [5.8, 13829.0], [5.9, 13829.0], [6.0, 13858.0], [6.1, 13858.0], [6.2, 13858.0], [6.3, 13858.0], [6.4, 13858.0], [6.5, 13858.0], [6.6, 13858.0], [6.7, 13858.0], [6.8, 13858.0], [6.9, 13858.0], [7.0, 13914.0], [7.1, 13914.0], [7.2, 13914.0], [7.3, 13914.0], [7.4, 13914.0], [7.5, 13914.0], [7.6, 13914.0], [7.7, 13914.0], [7.8, 13914.0], [7.9, 13914.0], [8.0, 13941.0], [8.1, 13941.0], [8.2, 13941.0], [8.3, 13941.0], [8.4, 13941.0], [8.5, 13941.0], [8.6, 13941.0], [8.7, 13941.0], [8.8, 13941.0], [8.9, 13941.0], [9.0, 14072.0], [9.1, 14072.0], [9.2, 14072.0], [9.3, 14072.0], [9.4, 14072.0], [9.5, 14072.0], [9.6, 14072.0], [9.7, 14072.0], [9.8, 14072.0], [9.9, 14072.0], [10.0, 14083.0], [10.1, 14083.0], [10.2, 14083.0], [10.3, 14083.0], [10.4, 14083.0], [10.5, 14083.0], [10.6, 14083.0], [10.7, 14083.0], [10.8, 14083.0], [10.9, 14083.0], [11.0, 14096.0], [11.1, 14096.0], [11.2, 14096.0], [11.3, 14096.0], [11.4, 14096.0], [11.5, 14096.0], [11.6, 14096.0], [11.7, 14096.0], [11.8, 14096.0], [11.9, 14096.0], [12.0, 14160.0], [12.1, 14160.0], [12.2, 14160.0], [12.3, 14160.0], [12.4, 14160.0], [12.5, 14160.0], [12.6, 14160.0], [12.7, 14160.0], [12.8, 14160.0], [12.9, 14160.0], [13.0, 14194.0], [13.1, 14194.0], [13.2, 14194.0], [13.3, 14194.0], [13.4, 14194.0], [13.5, 14194.0], [13.6, 14194.0], [13.7, 14194.0], [13.8, 14194.0], [13.9, 14194.0], [14.0, 14267.0], [14.1, 14267.0], [14.2, 14267.0], [14.3, 14267.0], [14.4, 14267.0], [14.5, 14267.0], [14.6, 14267.0], [14.7, 14267.0], [14.8, 14267.0], [14.9, 14267.0], [15.0, 14313.0], [15.1, 14313.0], [15.2, 14313.0], [15.3, 14313.0], [15.4, 14313.0], [15.5, 14313.0], [15.6, 14313.0], [15.7, 14313.0], [15.8, 14313.0], [15.9, 14313.0], [16.0, 14314.0], [16.1, 14314.0], [16.2, 14314.0], [16.3, 14314.0], [16.4, 14314.0], [16.5, 14314.0], [16.6, 14314.0], [16.7, 14314.0], [16.8, 14314.0], [16.9, 14314.0], [17.0, 14314.0], [17.1, 14314.0], [17.2, 14314.0], [17.3, 14314.0], [17.4, 14314.0], [17.5, 14314.0], [17.6, 14314.0], [17.7, 14314.0], [17.8, 14314.0], [17.9, 14314.0], [18.0, 14325.0], [18.1, 14325.0], [18.2, 14325.0], [18.3, 14325.0], [18.4, 14325.0], [18.5, 14325.0], [18.6, 14325.0], [18.7, 14325.0], [18.8, 14325.0], [18.9, 14325.0], [19.0, 14429.0], [19.1, 14429.0], [19.2, 14429.0], [19.3, 14429.0], [19.4, 14429.0], [19.5, 14429.0], [19.6, 14429.0], [19.7, 14429.0], [19.8, 14429.0], [19.9, 14429.0], [20.0, 14442.0], [20.1, 14442.0], [20.2, 14442.0], [20.3, 14442.0], [20.4, 14442.0], [20.5, 14442.0], [20.6, 14442.0], [20.7, 14442.0], [20.8, 14442.0], [20.9, 14442.0], [21.0, 14473.0], [21.1, 14473.0], [21.2, 14473.0], [21.3, 14473.0], [21.4, 14473.0], [21.5, 14473.0], [21.6, 14473.0], [21.7, 14473.0], [21.8, 14473.0], [21.9, 14473.0], [22.0, 14578.0], [22.1, 14578.0], [22.2, 14578.0], [22.3, 14578.0], [22.4, 14578.0], [22.5, 14578.0], [22.6, 14578.0], [22.7, 14578.0], [22.8, 14578.0], [22.9, 14578.0], [23.0, 14606.0], [23.1, 14606.0], [23.2, 14606.0], [23.3, 14606.0], [23.4, 14606.0], [23.5, 14606.0], [23.6, 14606.0], [23.7, 14606.0], [23.8, 14606.0], [23.9, 14606.0], [24.0, 14626.0], [24.1, 14626.0], [24.2, 14626.0], [24.3, 14626.0], [24.4, 14626.0], [24.5, 14626.0], [24.6, 14626.0], [24.7, 14626.0], [24.8, 14626.0], [24.9, 14626.0], [25.0, 14770.0], [25.1, 14770.0], [25.2, 14770.0], [25.3, 14770.0], [25.4, 14770.0], [25.5, 14770.0], [25.6, 14770.0], [25.7, 14770.0], [25.8, 14770.0], [25.9, 14770.0], [26.0, 14782.0], [26.1, 14782.0], [26.2, 14782.0], [26.3, 14782.0], [26.4, 14782.0], [26.5, 14782.0], [26.6, 14782.0], [26.7, 14782.0], [26.8, 14782.0], [26.9, 14782.0], [27.0, 14797.0], [27.1, 14797.0], [27.2, 14797.0], [27.3, 14797.0], [27.4, 14797.0], [27.5, 14797.0], [27.6, 14797.0], [27.7, 14797.0], [27.8, 14797.0], [27.9, 14797.0], [28.0, 14797.0], [28.1, 14797.0], [28.2, 14797.0], [28.3, 14797.0], [28.4, 14797.0], [28.5, 14797.0], [28.6, 14797.0], [28.7, 14797.0], [28.8, 14797.0], [28.9, 14797.0], [29.0, 14813.0], [29.1, 14813.0], [29.2, 14813.0], [29.3, 14813.0], [29.4, 14813.0], [29.5, 14813.0], [29.6, 14813.0], [29.7, 14813.0], [29.8, 14813.0], [29.9, 14813.0], [30.0, 14848.0], [30.1, 14848.0], [30.2, 14848.0], [30.3, 14848.0], [30.4, 14848.0], [30.5, 14848.0], [30.6, 14848.0], [30.7, 14848.0], [30.8, 14848.0], [30.9, 14848.0], [31.0, 14853.0], [31.1, 14853.0], [31.2, 14853.0], [31.3, 14853.0], [31.4, 14853.0], [31.5, 14853.0], [31.6, 14853.0], [31.7, 14853.0], [31.8, 14853.0], [31.9, 14853.0], [32.0, 14866.0], [32.1, 14866.0], [32.2, 14866.0], [32.3, 14866.0], [32.4, 14866.0], [32.5, 14866.0], [32.6, 14866.0], [32.7, 14866.0], [32.8, 14866.0], [32.9, 14866.0], [33.0, 14870.0], [33.1, 14870.0], [33.2, 14870.0], [33.3, 14870.0], [33.4, 14870.0], [33.5, 14870.0], [33.6, 14870.0], [33.7, 14870.0], [33.8, 14870.0], [33.9, 14870.0], [34.0, 14954.0], [34.1, 14954.0], [34.2, 14954.0], [34.3, 14954.0], [34.4, 14954.0], [34.5, 14954.0], [34.6, 14954.0], [34.7, 14954.0], [34.8, 14954.0], [34.9, 14954.0], [35.0, 14957.0], [35.1, 14957.0], [35.2, 14957.0], [35.3, 14957.0], [35.4, 14957.0], [35.5, 14957.0], [35.6, 14957.0], [35.7, 14957.0], [35.8, 14957.0], [35.9, 14957.0], [36.0, 14958.0], [36.1, 14958.0], [36.2, 14958.0], [36.3, 14958.0], [36.4, 14958.0], [36.5, 14958.0], [36.6, 14958.0], [36.7, 14958.0], [36.8, 14958.0], [36.9, 14958.0], [37.0, 14995.0], [37.1, 14995.0], [37.2, 14995.0], [37.3, 14995.0], [37.4, 14995.0], [37.5, 14995.0], [37.6, 14995.0], [37.7, 14995.0], [37.8, 14995.0], [37.9, 14995.0], [38.0, 15091.0], [38.1, 15091.0], [38.2, 15091.0], [38.3, 15091.0], [38.4, 15091.0], [38.5, 15091.0], [38.6, 15091.0], [38.7, 15091.0], [38.8, 15091.0], [38.9, 15091.0], [39.0, 15103.0], [39.1, 15103.0], [39.2, 15103.0], [39.3, 15103.0], [39.4, 15103.0], [39.5, 15103.0], [39.6, 15103.0], [39.7, 15103.0], [39.8, 15103.0], [39.9, 15103.0], [40.0, 15109.0], [40.1, 15109.0], [40.2, 15109.0], [40.3, 15109.0], [40.4, 15109.0], [40.5, 15109.0], [40.6, 15109.0], [40.7, 15109.0], [40.8, 15109.0], [40.9, 15109.0], [41.0, 15158.0], [41.1, 15158.0], [41.2, 15158.0], [41.3, 15158.0], [41.4, 15158.0], [41.5, 15158.0], [41.6, 15158.0], [41.7, 15158.0], [41.8, 15158.0], [41.9, 15158.0], [42.0, 15195.0], [42.1, 15195.0], [42.2, 15195.0], [42.3, 15195.0], [42.4, 15195.0], [42.5, 15195.0], [42.6, 15195.0], [42.7, 15195.0], [42.8, 15195.0], [42.9, 15195.0], [43.0, 15227.0], [43.1, 15227.0], [43.2, 15227.0], [43.3, 15227.0], [43.4, 15227.0], [43.5, 15227.0], [43.6, 15227.0], [43.7, 15227.0], [43.8, 15227.0], [43.9, 15227.0], [44.0, 15275.0], [44.1, 15275.0], [44.2, 15275.0], [44.3, 15275.0], [44.4, 15275.0], [44.5, 15275.0], [44.6, 15275.0], [44.7, 15275.0], [44.8, 15275.0], [44.9, 15275.0], [45.0, 15294.0], [45.1, 15294.0], [45.2, 15294.0], [45.3, 15294.0], [45.4, 15294.0], [45.5, 15294.0], [45.6, 15294.0], [45.7, 15294.0], [45.8, 15294.0], [45.9, 15294.0], [46.0, 15297.0], [46.1, 15297.0], [46.2, 15297.0], [46.3, 15297.0], [46.4, 15297.0], [46.5, 15297.0], [46.6, 15297.0], [46.7, 15297.0], [46.8, 15297.0], [46.9, 15297.0], [47.0, 15323.0], [47.1, 15323.0], [47.2, 15323.0], [47.3, 15323.0], [47.4, 15323.0], [47.5, 15323.0], [47.6, 15323.0], [47.7, 15323.0], [47.8, 15323.0], [47.9, 15323.0], [48.0, 15326.0], [48.1, 15326.0], [48.2, 15326.0], [48.3, 15326.0], [48.4, 15326.0], [48.5, 15326.0], [48.6, 15326.0], [48.7, 15326.0], [48.8, 15326.0], [48.9, 15326.0], [49.0, 15327.0], [49.1, 15327.0], [49.2, 15327.0], [49.3, 15327.0], [49.4, 15327.0], [49.5, 15327.0], [49.6, 15327.0], [49.7, 15327.0], [49.8, 15327.0], [49.9, 15327.0], [50.0, 15343.0], [50.1, 15343.0], [50.2, 15343.0], [50.3, 15343.0], [50.4, 15343.0], [50.5, 15343.0], [50.6, 15343.0], [50.7, 15343.0], [50.8, 15343.0], [50.9, 15343.0], [51.0, 15370.0], [51.1, 15370.0], [51.2, 15370.0], [51.3, 15370.0], [51.4, 15370.0], [51.5, 15370.0], [51.6, 15370.0], [51.7, 15370.0], [51.8, 15370.0], [51.9, 15370.0], [52.0, 15371.0], [52.1, 15371.0], [52.2, 15371.0], [52.3, 15371.0], [52.4, 15371.0], [52.5, 15371.0], [52.6, 15371.0], [52.7, 15371.0], [52.8, 15371.0], [52.9, 15371.0], [53.0, 15379.0], [53.1, 15379.0], [53.2, 15379.0], [53.3, 15379.0], [53.4, 15379.0], [53.5, 15379.0], [53.6, 15379.0], [53.7, 15379.0], [53.8, 15379.0], [53.9, 15379.0], [54.0, 15409.0], [54.1, 15409.0], [54.2, 15409.0], [54.3, 15409.0], [54.4, 15409.0], [54.5, 15409.0], [54.6, 15409.0], [54.7, 15409.0], [54.8, 15409.0], [54.9, 15409.0], [55.0, 15446.0], [55.1, 15446.0], [55.2, 15446.0], [55.3, 15446.0], [55.4, 15446.0], [55.5, 15446.0], [55.6, 15446.0], [55.7, 15446.0], [55.8, 15446.0], [55.9, 15446.0], [56.0, 15447.0], [56.1, 15447.0], [56.2, 15447.0], [56.3, 15447.0], [56.4, 15447.0], [56.5, 15447.0], [56.6, 15447.0], [56.7, 15447.0], [56.8, 15447.0], [56.9, 15447.0], [57.0, 15454.0], [57.1, 15454.0], [57.2, 15454.0], [57.3, 15454.0], [57.4, 15454.0], [57.5, 15454.0], [57.6, 15454.0], [57.7, 15454.0], [57.8, 15454.0], [57.9, 15454.0], [58.0, 15488.0], [58.1, 15488.0], [58.2, 15488.0], [58.3, 15488.0], [58.4, 15488.0], [58.5, 15488.0], [58.6, 15488.0], [58.7, 15488.0], [58.8, 15488.0], [58.9, 15488.0], [59.0, 15499.0], [59.1, 15499.0], [59.2, 15499.0], [59.3, 15499.0], [59.4, 15499.0], [59.5, 15499.0], [59.6, 15499.0], [59.7, 15499.0], [59.8, 15499.0], [59.9, 15499.0], [60.0, 15519.0], [60.1, 15519.0], [60.2, 15519.0], [60.3, 15519.0], [60.4, 15519.0], [60.5, 15519.0], [60.6, 15519.0], [60.7, 15519.0], [60.8, 15519.0], [60.9, 15519.0], [61.0, 15536.0], [61.1, 15536.0], [61.2, 15536.0], [61.3, 15536.0], [61.4, 15536.0], [61.5, 15536.0], [61.6, 15536.0], [61.7, 15536.0], [61.8, 15536.0], [61.9, 15536.0], [62.0, 15547.0], [62.1, 15547.0], [62.2, 15547.0], [62.3, 15547.0], [62.4, 15547.0], [62.5, 15547.0], [62.6, 15547.0], [62.7, 15547.0], [62.8, 15547.0], [62.9, 15547.0], [63.0, 15569.0], [63.1, 15569.0], [63.2, 15569.0], [63.3, 15569.0], [63.4, 15569.0], [63.5, 15569.0], [63.6, 15569.0], [63.7, 15569.0], [63.8, 15569.0], [63.9, 15569.0], [64.0, 15579.0], [64.1, 15579.0], [64.2, 15579.0], [64.3, 15579.0], [64.4, 15579.0], [64.5, 15579.0], [64.6, 15579.0], [64.7, 15579.0], [64.8, 15579.0], [64.9, 15579.0], [65.0, 15591.0], [65.1, 15591.0], [65.2, 15591.0], [65.3, 15591.0], [65.4, 15591.0], [65.5, 15591.0], [65.6, 15591.0], [65.7, 15591.0], [65.8, 15591.0], [65.9, 15591.0], [66.0, 15609.0], [66.1, 15609.0], [66.2, 15609.0], [66.3, 15609.0], [66.4, 15609.0], [66.5, 15609.0], [66.6, 15609.0], [66.7, 15609.0], [66.8, 15609.0], [66.9, 15609.0], [67.0, 15654.0], [67.1, 15654.0], [67.2, 15654.0], [67.3, 15654.0], [67.4, 15654.0], [67.5, 15654.0], [67.6, 15654.0], [67.7, 15654.0], [67.8, 15654.0], [67.9, 15654.0], [68.0, 15654.0], [68.1, 15654.0], [68.2, 15654.0], [68.3, 15654.0], [68.4, 15654.0], [68.5, 15654.0], [68.6, 15654.0], [68.7, 15654.0], [68.8, 15654.0], [68.9, 15654.0], [69.0, 15662.0], [69.1, 15662.0], [69.2, 15662.0], [69.3, 15662.0], [69.4, 15662.0], [69.5, 15662.0], [69.6, 15662.0], [69.7, 15662.0], [69.8, 15662.0], [69.9, 15662.0], [70.0, 15695.0], [70.1, 15695.0], [70.2, 15695.0], [70.3, 15695.0], [70.4, 15695.0], [70.5, 15695.0], [70.6, 15695.0], [70.7, 15695.0], [70.8, 15695.0], [70.9, 15695.0], [71.0, 15715.0], [71.1, 15715.0], [71.2, 15715.0], [71.3, 15715.0], [71.4, 15715.0], [71.5, 15715.0], [71.6, 15715.0], [71.7, 15715.0], [71.8, 15715.0], [71.9, 15715.0], [72.0, 15753.0], [72.1, 15753.0], [72.2, 15753.0], [72.3, 15753.0], [72.4, 15753.0], [72.5, 15753.0], [72.6, 15753.0], [72.7, 15753.0], [72.8, 15753.0], [72.9, 15753.0], [73.0, 15820.0], [73.1, 15820.0], [73.2, 15820.0], [73.3, 15820.0], [73.4, 15820.0], [73.5, 15820.0], [73.6, 15820.0], [73.7, 15820.0], [73.8, 15820.0], [73.9, 15820.0], [74.0, 15830.0], [74.1, 15830.0], [74.2, 15830.0], [74.3, 15830.0], [74.4, 15830.0], [74.5, 15830.0], [74.6, 15830.0], [74.7, 15830.0], [74.8, 15830.0], [74.9, 15830.0], [75.0, 15839.0], [75.1, 15839.0], [75.2, 15839.0], [75.3, 15839.0], [75.4, 15839.0], [75.5, 15839.0], [75.6, 15839.0], [75.7, 15839.0], [75.8, 15839.0], [75.9, 15839.0], [76.0, 15859.0], [76.1, 15859.0], [76.2, 15859.0], [76.3, 15859.0], [76.4, 15859.0], [76.5, 15859.0], [76.6, 15859.0], [76.7, 15859.0], [76.8, 15859.0], [76.9, 15859.0], [77.0, 15869.0], [77.1, 15869.0], [77.2, 15869.0], [77.3, 15869.0], [77.4, 15869.0], [77.5, 15869.0], [77.6, 15869.0], [77.7, 15869.0], [77.8, 15869.0], [77.9, 15869.0], [78.0, 15883.0], [78.1, 15883.0], [78.2, 15883.0], [78.3, 15883.0], [78.4, 15883.0], [78.5, 15883.0], [78.6, 15883.0], [78.7, 15883.0], [78.8, 15883.0], [78.9, 15883.0], [79.0, 15912.0], [79.1, 15912.0], [79.2, 15912.0], [79.3, 15912.0], [79.4, 15912.0], [79.5, 15912.0], [79.6, 15912.0], [79.7, 15912.0], [79.8, 15912.0], [79.9, 15912.0], [80.0, 15938.0], [80.1, 15938.0], [80.2, 15938.0], [80.3, 15938.0], [80.4, 15938.0], [80.5, 15938.0], [80.6, 15938.0], [80.7, 15938.0], [80.8, 15938.0], [80.9, 15938.0], [81.0, 15957.0], [81.1, 15957.0], [81.2, 15957.0], [81.3, 15957.0], [81.4, 15957.0], [81.5, 15957.0], [81.6, 15957.0], [81.7, 15957.0], [81.8, 15957.0], [81.9, 15957.0], [82.0, 15964.0], [82.1, 15964.0], [82.2, 15964.0], [82.3, 15964.0], [82.4, 15964.0], [82.5, 15964.0], [82.6, 15964.0], [82.7, 15964.0], [82.8, 15964.0], [82.9, 15964.0], [83.0, 15969.0], [83.1, 15969.0], [83.2, 15969.0], [83.3, 15969.0], [83.4, 15969.0], [83.5, 15969.0], [83.6, 15969.0], [83.7, 15969.0], [83.8, 15969.0], [83.9, 15969.0], [84.0, 15984.0], [84.1, 15984.0], [84.2, 15984.0], [84.3, 15984.0], [84.4, 15984.0], [84.5, 15984.0], [84.6, 15984.0], [84.7, 15984.0], [84.8, 15984.0], [84.9, 15984.0], [85.0, 15985.0], [85.1, 15985.0], [85.2, 15985.0], [85.3, 15985.0], [85.4, 15985.0], [85.5, 15985.0], [85.6, 15985.0], [85.7, 15985.0], [85.8, 15985.0], [85.9, 15985.0], [86.0, 15986.0], [86.1, 15986.0], [86.2, 15986.0], [86.3, 15986.0], [86.4, 15986.0], [86.5, 15986.0], [86.6, 15986.0], [86.7, 15986.0], [86.8, 15986.0], [86.9, 15986.0], [87.0, 15999.0], [87.1, 15999.0], [87.2, 15999.0], [87.3, 15999.0], [87.4, 15999.0], [87.5, 15999.0], [87.6, 15999.0], [87.7, 15999.0], [87.8, 15999.0], [87.9, 15999.0], [88.0, 16001.0], [88.1, 16001.0], [88.2, 16001.0], [88.3, 16001.0], [88.4, 16001.0], [88.5, 16001.0], [88.6, 16001.0], [88.7, 16001.0], [88.8, 16001.0], [88.9, 16001.0], [89.0, 16003.0], [89.1, 16003.0], [89.2, 16003.0], [89.3, 16003.0], [89.4, 16003.0], [89.5, 16003.0], [89.6, 16003.0], [89.7, 16003.0], [89.8, 16003.0], [89.9, 16003.0], [90.0, 16015.0], [90.1, 16015.0], [90.2, 16015.0], [90.3, 16015.0], [90.4, 16015.0], [90.5, 16015.0], [90.6, 16015.0], [90.7, 16015.0], [90.8, 16015.0], [90.9, 16015.0], [91.0, 16045.0], [91.1, 16045.0], [91.2, 16045.0], [91.3, 16045.0], [91.4, 16045.0], [91.5, 16045.0], [91.6, 16045.0], [91.7, 16045.0], [91.8, 16045.0], [91.9, 16045.0], [92.0, 16089.0], [92.1, 16089.0], [92.2, 16089.0], [92.3, 16089.0], [92.4, 16089.0], [92.5, 16089.0], [92.6, 16089.0], [92.7, 16089.0], [92.8, 16089.0], [92.9, 16089.0], [93.0, 16092.0], [93.1, 16092.0], [93.2, 16092.0], [93.3, 16092.0], [93.4, 16092.0], [93.5, 16092.0], [93.6, 16092.0], [93.7, 16092.0], [93.8, 16092.0], [93.9, 16092.0], [94.0, 16097.0], [94.1, 16097.0], [94.2, 16097.0], [94.3, 16097.0], [94.4, 16097.0], [94.5, 16097.0], [94.6, 16097.0], [94.7, 16097.0], [94.8, 16097.0], [94.9, 16097.0], [95.0, 16098.0], [95.1, 16098.0], [95.2, 16098.0], [95.3, 16098.0], [95.4, 16098.0], [95.5, 16098.0], [95.6, 16098.0], [95.7, 16098.0], [95.8, 16098.0], [95.9, 16098.0], [96.0, 16099.0], [96.1, 16099.0], [96.2, 16099.0], [96.3, 16099.0], [96.4, 16099.0], [96.5, 16099.0], [96.6, 16099.0], [96.7, 16099.0], [96.8, 16099.0], [96.9, 16099.0], [97.0, 16251.0], [97.1, 16251.0], [97.2, 16251.0], [97.3, 16251.0], [97.4, 16251.0], [97.5, 16251.0], [97.6, 16251.0], [97.7, 16251.0], [97.8, 16251.0], [97.9, 16251.0], [98.0, 16276.0], [98.1, 16276.0], [98.2, 16276.0], [98.3, 16276.0], [98.4, 16276.0], [98.5, 16276.0], [98.6, 16276.0], [98.7, 16276.0], [98.8, 16276.0], [98.9, 16276.0], [99.0, 16427.0], [99.1, 16427.0], [99.2, 16427.0], [99.3, 16427.0], [99.4, 16427.0], [99.5, 16427.0], [99.6, 16427.0], [99.7, 16427.0], [99.8, 16427.0], [99.9, 16427.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 12800.0, "maxY": 9.0, "series": [{"data": [[12800.0, 1.0], [13300.0, 1.0], [13600.0, 1.0], [13500.0, 1.0], [13800.0, 2.0], [13700.0, 1.0], [13900.0, 2.0], [14000.0, 3.0], [14100.0, 2.0], [14300.0, 4.0], [14200.0, 1.0], [14400.0, 3.0], [14700.0, 4.0], [14800.0, 5.0], [14600.0, 2.0], [14500.0, 1.0], [14900.0, 4.0], [15100.0, 4.0], [15200.0, 4.0], [15300.0, 7.0], [15000.0, 1.0], [15500.0, 6.0], [15600.0, 5.0], [15400.0, 6.0], [15700.0, 2.0], [15800.0, 6.0], [16000.0, 9.0], [15900.0, 9.0], [16200.0, 2.0], [16400.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 16400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 100.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 100.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 100.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 50.58000000000003, "minX": 1.6955781E12, "maxY": 50.58000000000003, "series": [{"data": [[1.6955781E12, 50.58000000000003]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6955781E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 12891.0, "minX": 1.0, "maxY": 16427.0, "series": [{"data": [[2.0, 16098.0], [3.0, 16015.0], [4.0, 15999.0], [5.0, 16251.0], [6.0, 16089.0], [8.0, 16068.5], [9.0, 16097.0], [10.0, 15957.0], [11.0, 15984.0], [12.0, 16099.0], [13.0, 15985.0], [14.0, 15969.0], [15.0, 15830.0], [16.0, 15715.0], [17.0, 15912.0], [18.0, 16427.0], [19.0, 15820.0], [20.0, 15986.0], [21.0, 15938.0], [23.0, 15849.0], [24.0, 15964.0], [25.0, 15547.0], [26.0, 15883.0], [27.0, 15654.0], [28.0, 15695.0], [29.0, 15869.0], [30.0, 15609.0], [31.0, 15488.0], [35.0, 16003.0], [34.0, 15472.666666666666], [37.0, 16001.0], [36.0, 15591.0], [39.0, 15343.0], [38.0, 15499.0], [41.0, 15409.0], [40.0, 15654.0], [43.0, 15536.0], [42.0, 15447.0], [45.0, 15446.0], [44.0, 15454.0], [47.0, 15091.0], [46.0, 15297.0], [49.0, 15569.0], [48.0, 15662.0], [50.0, 15327.0], [53.0, 14954.0], [52.0, 15074.5], [55.0, 15579.0], [54.0, 15195.0], [57.0, 15323.0], [56.0, 15103.0], [59.0, 15326.0], [58.0, 15519.0], [61.0, 15275.0], [60.0, 15370.0], [63.0, 15227.0], [62.0, 15109.0], [67.0, 14853.0], [66.0, 14848.0], [65.0, 14578.0], [64.0, 14797.0], [71.0, 14810.5], [69.0, 14957.0], [68.0, 15158.0], [75.0, 14606.0], [74.0, 14866.0], [73.0, 14870.0], [72.0, 14958.0], [79.0, 14325.0], [78.0, 14797.0], [77.0, 14813.0], [76.0, 14782.0], [83.0, 14473.0], [82.0, 14194.0], [81.0, 14429.0], [80.0, 14313.0], [87.0, 14314.0], [85.0, 14442.0], [84.0, 14267.0], [91.0, 14096.0], [90.0, 13858.0], [89.0, 14160.0], [88.0, 14072.0], [95.0, 13941.0], [94.0, 13707.0], [93.0, 13914.0], [92.0, 14083.0], [99.0, 13327.0], [98.0, 13607.0], [97.0, 13509.0], [96.0, 13829.0], [100.0, 12891.0], [1.0, 16276.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[50.58000000000003, 15174.360000000004]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 196.66666666666666, "minX": 1.6955781E12, "maxY": 21958.333333333332, "series": [{"data": [[1.6955781E12, 21958.333333333332]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6955781E12, 196.66666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6955781E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 15174.360000000004, "minX": 1.6955781E12, "maxY": 15174.360000000004, "series": [{"data": [[1.6955781E12, 15174.360000000004]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6955781E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 15174.25, "minX": 1.6955781E12, "maxY": 15174.25, "series": [{"data": [[1.6955781E12, 15174.25]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6955781E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 8.930000000000001, "minX": 1.6955781E12, "maxY": 8.930000000000001, "series": [{"data": [[1.6955781E12, 8.930000000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6955781E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 12891.0, "minX": 1.6955781E12, "maxY": 16427.0, "series": [{"data": [[1.6955781E12, 16427.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6955781E12, 16013.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6955781E12, 16425.489999999998]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6955781E12, 16097.95]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6955781E12, 12891.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6955781E12, 15335.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6955781E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 12891.0, "minX": 1.0, "maxY": 15969.0, "series": [{"data": [[1.0, 12891.0], [38.0, 15370.5], [21.0, 14606.0], [11.0, 13858.0], [29.0, 15969.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 38.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 12886.0, "minX": 1.0, "maxY": 15969.0, "series": [{"data": [[1.0, 12886.0], [38.0, 15370.5], [21.0, 14606.0], [11.0, 13858.0], [29.0, 15969.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 38.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.6955781E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.6955781E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6955781E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.6955781E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.6955781E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6955781E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.6955781E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.6955781E12, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6955781E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.6955781E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.6955781E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6955781E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

