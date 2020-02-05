import React, { Component } from "react";
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainContents from "../components/MainContents";
import NavBar from "../components/NavBar";

class App extends Component {
  constructor(){
    super();
    this.state = {
      pageCaption: `Служба качества`,
      navBarVisible: false,
      filterVisible: true,
      windowHeight: undefined,
      windowWidth: undefined,
      demoUsers: [],
      data: [
        {
          "id": 16,
          "index": "1649РУ1Т",
          "specification": "ЮКСУ.431223.001ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": "1649РУ1Т",
          "shapingSizeList": [],
          "restoreKey": "Product:{@Id:16}"
        },
        {
          "id": 2717,
          "index": "1890ВГ10Т",
          "specification": "ЮКСУ.431281.018ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": null,
          "shapingSizeList": [],
          "restoreKey": "Product:{@Id:2717}"
        },
        {
          "id": 3,
          "index": "1890ВГ11Т",
          "specification": "ЮКСУ.431281.026ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": "1890ВГ11Т",
          "shapingSizeList": [],
          "restoreKey": "Product:{@Id:3}"
        },
        {
          "id": 20,
          "index": "1890ВГ14Т",
          "specification": "ЮКСУ.431295.002ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": "1890ВГ14Т",
          "shapingSizeList": [
            {
              "id": 8,
              "value": "40.2",
              "tolerance": "0.3",
              "description": "40.2 ± 0.3",
              "restoreKey": "ShapingSize:{@Id:8}"
            }
          ],
          "restoreKey": "Product:{@Id:20}"
        },
        {
          "id": 23,
          "index": "1890ВГ15Т",
          "specification": "ЮКСУ.431295.004ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": "1890ВГ15Т",
          "shapingSizeList": [],
          "restoreKey": "Product:{@Id:23}"
        },
        {
          "id": 9,
          "index": "1890ВГ18Я",
          "specification": "ЮКСУ.431295.009ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": "1890ВГ18Я",
          "shapingSizeList": [],
          "restoreKey": "Product:{@Id:9}"
        },
        {
          "id": 2464,
          "index": "1890ВГ3Т",
          "specification": "ЮКСУ.431281.001ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": null,
          "shapingSizeList": [],
          "restoreKey": "Product:{@Id:2464}"
        },
        {
          "id": 2465,
          "index": "1890ВГ5Т",
          "specification": "ЮКСУ.431281.006ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": null,
          "shapingSizeList": [],
          "restoreKey": "Product:{@Id:2465}"
        },
        {
          "id": 3223,
          "index": "1890ВГ8Т",
          "specification": "ЮКСУ.431281.019ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": null,
          "shapingSizeList": [],
          "restoreKey": "Product:{@Id:3223}"
        },
        {
          "id": 4389,
          "index": "1890ВМ108",
          "specification": "ЮКСУ.431281.110ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": null,
          "shapingSizeList": [],
          "restoreKey": "Product:{@Id:4389}"
        },
        {
          "id": 3762,
          "index": "1890ВМ118",
          "specification": "ЮКСУ.431281.111ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": null,
          "shapingSizeList": [],
          "restoreKey": "Product:{@Id:3762}"
        },
        {
          "id": 3763,
          "index": "1890ВМ128",
          "specification": "ЮКСУ.431282.002ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": null,
          "shapingSizeList": [],
          "restoreKey": "Product:{@Id:3763}"
        },
        {
          "id": 1,
          "index": "1890ВМ1Т",
          "specification": "ЮКСУ.431281.012ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": "1890ВМ1Т",
          "shapingSizeList": [
            {
              "id": 1,
              "value": "27.9",
              "tolerance": "0.1",
              "description": "27.9 ± 0.1",
              "restoreKey": "ShapingSize:{@Id:1}"
            },
            {
              "id": 2,
              "value": "27.1",
              "tolerance": "0.22",
              "description": "27.1 ± 0.22",
              "restoreKey": "ShapingSize:{@Id:2}"
            },
            {
              "id": 4,
              "value": "29.0",
              "tolerance": "0.2",
              "description": "29.0 ± 0.2",
              "restoreKey": "ShapingSize:{@Id:4}"
            }
          ],
          "restoreKey": "Product:{@Id:1}"
        },
        {
          "id": 2,
          "index": "1890ВМ2Т",
          "specification": "ЮКСУ. 431281.025ТУ",
          "testActDate": "04.07.2016",
          "testActValidDate": "16.08.2016",
          "testActNo": "27-1890ВМ2Т",
          "shapingSizeList": [
            {
              "id": 1,
              "value": "27.9",
              "tolerance": "0.1",
              "description": "27.9 ± 0.1",
              "restoreKey": "ShapingSize:{@Id:1}"
            },
            {
              "id": 2,
              "value": "27.1",
              "tolerance": "0.22",
              "description": "27.1 ± 0.22",
              "restoreKey": "ShapingSize:{@Id:2}"
            },
            {
              "id": 3795,
              "value": "29.4",
              "tolerance": "0.2",
              "description": "29.4 ± 0.2",
              "restoreKey": "ShapingSize:{@Id:3795}"
            },
            {
              "id": 4,
              "value": "29.0",
              "tolerance": "0.2",
              "description": "29.0 ± 0.2",
              "restoreKey": "ShapingSize:{@Id:4}"
            }
          ],
          "restoreKey": "Product:{@Id:2}"
        },
        {
          "id": 5,
          "index": "1890ВМ5Ф",
          "specification": "ЮКСУ.431281.032ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": "1890ВМ5Ф",
          "shapingSizeList": [],
          "restoreKey": "Product:{@Id:5}"
        },
        {
          "id": 12,
          "index": "1890ВМ6Я",
          "specification": "ЮКСУ.431281.102ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": "1890ВМ6Я",
          "shapingSizeList": [],
          "restoreKey": "Product:{@Id:12}"
        },
        {
          "id": 11,
          "index": "1890ВМ7Я",
          "specification": "ЮКСУ.431281.104ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": "1890ВМ7Я",
          "shapingSizeList": [],
          "restoreKey": "Product:{@Id:11}"
        },
        {
          "id": 1112,
          "index": "1890ВМ8Я",
          "specification": "ЮКСУ.431281.107ТУ,A",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": "1890ВМ8Я",
          "shapingSizeList": [],
          "restoreKey": "Product:{@Id:1112}"
        },
        {
          "id": 1160,
          "index": "1890ВМ9Я",
          "specification": "ЮКСУ.431281.108",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": null,
          "shapingSizeList": [],
          "restoreKey": "Product:{@Id:1160}"
        },
        {
          "id": 4,
          "index": "1890ВЦ3Т",
          "specification": "ЮКСУ.431281.031ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": "16-1890ВЦ3Т",
          "shapingSizeList": [],
          "restoreKey": "Product:{@Id:4}"
        },
        {
          "id": 4559,
          "index": "1890КП1Я",
          "specification": "ЮКСУ.431281.011ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": null,
          "shapingSizeList": [],
          "restoreKey": "Product:{@Id:4559}"
        },
        {
          "id": 18,
          "index": "1890КП2Ф",
          "specification": "ЮКСУ.431243.005ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": "1890КП2Ф",
          "shapingSizeList": [],
          "restoreKey": "Product:{@Id:18}"
        },
        {
          "id": 15,
          "index": "1890КП3Я",
          "specification": "ЮКСУ.431243.001ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": "1890КП3Я",
          "shapingSizeList": [],
          "restoreKey": "Product:{@Id:15}"
        },
        {
          "id": 3366,
          "index": "1890КХ018",
          "specification": "ЮКСУ.431243.004ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": null,
          "shapingSizeList": [],
          "restoreKey": "Product:{@Id:3366}"
        },
        {
          "id": 2474,
          "index": "1895ВА3Н4",
          "specification": "ЮФКВ.431295.012ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": null,
          "shapingSizeList": [],
          "restoreKey": "Product:{@Id:2474}"
        },
        {
          "id": 10,
          "index": "1899ВГ2Т",
          "specification": "ЮКСУ.431200.005-02ТУ",
          "testActDate": "13.07.2016",
          "testActValidDate": "12.10.2016",
          "testActNo": "18-1899ВГ2Т",
          "shapingSizeList": [
            {
              "id": 1,
              "value": "27.9",
              "tolerance": "0.1",
              "description": "27.9 ± 0.1",
              "restoreKey": "ShapingSize:{@Id:1}"
            },
            {
              "id": 2,
              "value": "27.1",
              "tolerance": "0.22",
              "description": "27.1 ± 0.22",
              "restoreKey": "ShapingSize:{@Id:2}"
            },
            {
              "id": 4,
              "value": "29.0",
              "tolerance": "0.2",
              "description": "29.0 ± 0.2",
              "restoreKey": "ShapingSize:{@Id:4}"
            }
          ],
          "restoreKey": "Product:{@Id:10}"
        },
        {
          "id": 22,
          "index": "1900ВМ2Т",
          "specification": "ЮКСУ.431281.105ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": "1900ВМ2Т",
          "shapingSizeList": [
            {
              "id": 1,
              "value": "27.9",
              "tolerance": "0.1",
              "description": "27.9 ± 0.1",
              "restoreKey": "ShapingSize:{@Id:1}"
            },
            {
              "id": 2,
              "value": "27.1",
              "tolerance": "0.22",
              "description": "27.1 ± 0.22",
              "restoreKey": "ShapingSize:{@Id:2}"
            },
            {
              "id": 4,
              "value": "29.0",
              "tolerance": "0.2",
              "description": "29.0 ± 0.2",
              "restoreKey": "ShapingSize:{@Id:4}"
            }
          ],
          "restoreKey": "Product:{@Id:22}"
        },
        {
          "id": 1819,
          "index": "1907ВК016",
          "specification": "ЮКСУ.431295.016ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": null,
          "shapingSizeList": [],
          "restoreKey": "Product:{@Id:1819}"
        },
        {
          "id": 1756,
          "index": "1907ВМ014",
          "specification": "ЮКСУ.431288.002ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": null,
          "shapingSizeList": [],
          "restoreKey": "Product:{@Id:1756}"
        },
        {
          "id": 3770,
          "index": "1907ВМ01А4",
          "specification": "ЮКСУ.431288.002ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": null,
          "shapingSizeList": [],
          "restoreKey": "Product:{@Id:3770}"
        },
        {
          "id": 1777,
          "index": "1907ВМ044",
          "specification": "ЮКСУ.431288.003ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": null,
          "shapingSizeList": [
            {
              "id": 2012,
              "value": "42.8",
              "tolerance": "0.5",
              "description": "42.8 ± 0.5",
              "restoreKey": "ShapingSize:{@Id:2012}"
            }
          ],
          "restoreKey": "Product:{@Id:1777}"
        },
        {
          "id": 1419,
          "index": "1907ВМ056",
          "specification": "ЮКСУ.431288.006",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": null,
          "shapingSizeList": [],
          "restoreKey": "Product:{@Id:1419}"
        },
        {
          "id": 1414,
          "index": "1907ВМ066",
          "specification": "ЮКСУ.431288.004",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": null,
          "shapingSizeList": [],
          "restoreKey": "Product:{@Id:1414}"
        },
        {
          "id": 17,
          "index": "1990АИ1Т",
          "specification": "ЮКСУ.431200.006-07ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": "1990АИ1Т",
          "shapingSizeList": [],
          "restoreKey": "Product:{@Id:17}"
        },
        {
          "id": 21,
          "index": "1990ВГ3Т",
          "specification": "ЮКСУ.431200.006-05ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": "1990ВГ3Т",
          "shapingSizeList": [
            {
              "id": 8,
              "value": "40.2",
              "tolerance": "0.3",
              "description": "40.2 ± 0.3",
              "restoreKey": "ShapingSize:{@Id:8}"
            }
          ],
          "restoreKey": "Product:{@Id:21}"
        },
        {
          "id": 13,
          "index": "1990ВГ8Т",
          "specification": "ЮКСУ.431200.006-04ТУ",
          "testActDate": "05.09.2016",
          "testActValidDate": null,
          "testActNo": "8-1990ВГ8Т",
          "shapingSizeList": [
            {
              "id": 8,
              "value": "40.2",
              "tolerance": "0.3",
              "description": "40.2 ± 0.3",
              "restoreKey": "ShapingSize:{@Id:8}"
            }
          ],
          "restoreKey": "Product:{@Id:13}"
        },
        {
          "id": 14,
          "index": "1990ВГ9Т",
          "specification": "ЮКСУ.431200.006-06ТУ",
          "testActDate": "05.09.2016",
          "testActValidDate": null,
          "testActNo": "2-1990ВГ9Т",
          "shapingSizeList": [
            {
              "id": 8,
              "value": "40.2",
              "tolerance": "0.3",
              "description": "40.2 ± 0.3",
              "restoreKey": "ShapingSize:{@Id:8}"
            }
          ],
          "restoreKey": "Product:{@Id:14}"
        },
        {
          "id": 19,
          "index": "1990ВМ2Т",
          "specification": "ЮКСУ.431200.006-01ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": "1990ВМ2Т",
          "shapingSizeList": [
            {
              "id": 1,
              "value": "27.9",
              "tolerance": "0.1",
              "description": "27.9 ± 0.1",
              "restoreKey": "ShapingSize:{@Id:1}"
            },
            {
              "id": 2,
              "value": "27.1",
              "tolerance": "0.22",
              "description": "27.1 ± 0.22",
              "restoreKey": "ShapingSize:{@Id:2}"
            },
            {
              "id": 4,
              "value": "29.0",
              "tolerance": "0.2",
              "description": "29.0 ± 0.2",
              "restoreKey": "ShapingSize:{@Id:4}"
            }
          ],
          "restoreKey": "Product:{@Id:19}"
        },
        {
          "id": 1726,
          "index": "5890ВГ1АТ",
          "specification": null,
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": null,
          "shapingSizeList": [
            {
              "id": 8,
              "value": "40.2",
              "tolerance": "0.3",
              "description": "40.2 ± 0.3",
              "restoreKey": "ShapingSize:{@Id:8}"
            }
          ],
          "restoreKey": "Product:{@Id:1726}"
        },
        {
          "id": 7,
          "index": "5890ВГ1Т",
          "specification": "АЕЯР.431290.529ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": "5890ВГ1Т",
          "shapingSizeList": [
            {
              "id": 8,
              "value": "40.2",
              "tolerance": "0.3",
              "description": "40.2 ± 0.3",
              "restoreKey": "ShapingSize:{@Id:8}"
            }
          ],
          "restoreKey": "Product:{@Id:7}"
        },
        {
          "id": 6,
          "index": "5890ВЕ1Т",
          "specification": "ЮКСУ.431288.001ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": "5890ВЕ1Т",
          "shapingSizeList": [
            {
              "id": 8,
              "value": "40.2",
              "tolerance": "0.3",
              "description": "40.2 ± 0.3",
              "restoreKey": "ShapingSize:{@Id:8}"
            }
          ],
          "restoreKey": "Product:{@Id:6}"
        },
        {
          "id": 8,
          "index": "5890ВМ1Т",
          "specification": "ЮКСУ.431281.103ТУ",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": "5890ВМ1Т",
          "shapingSizeList": [
            {
              "id": 1,
              "value": "27.9",
              "tolerance": "0.1",
              "description": "27.9 ± 0.1",
              "restoreKey": "ShapingSize:{@Id:1}"
            },
            {
              "id": 2,
              "value": "27.1",
              "tolerance": "0.22",
              "description": "27.1 ± 0.22",
              "restoreKey": "ShapingSize:{@Id:2}"
            },
            {
              "id": 4,
              "value": "29.0",
              "tolerance": "0.2",
              "description": "29.0 ± 0.2",
              "restoreKey": "ShapingSize:{@Id:4}"
            }
          ],
          "restoreKey": "Product:{@Id:8}"
        },
        {
          "id": 966,
          "index": "ГПКФ.431432.008",
          "specification": "НСАМ.757644.010",
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": "ГПКФ.431432.008",
          "shapingSizeList": [],
          "restoreKey": "Product:{@Id:966}"
        },
        {
          "id": 3484,
          "index": "Кристаллы ВПМД",
          "specification": null,
          "testActDate": null,
          "testActValidDate": null,
          "testActNo": null,
          "shapingSizeList": [],
          "restoreKey": "Product:{@Id:3484}"
        }
      ]
      ,
      types: []
    };
  }

  
  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)

		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => {return response.json(); })
			.then(users => {this.setState({ demoUsers: users });});

    fetch("/qm/product/list")
      .then(response => response.json())
      .then(items => this.setState({ data: items }));

    fetch("/qm/assembly-dept/notice/types")
      .then(response => response.json())
      .then(items => this.setState({ types: items }));

  }

  // Обработчик синтетического эвента ресайза окна
  handleResize = () => this.setState({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth
  });

  // Обработчик синтетического эвента кнопки отображения сайдбара
  handleNavBarToggle = () => {
    this.setState({navBarVisible: !this.state.navBarVisible});
  }

    // Обработчик синтетического эвента кнопки отображения сайдбара
    handleFilterToggle = () => {
      this.setState({filterVisible: !this.state.filterVisible});
    }


  render() {
	return (
    <div className="App">
      <Header 
        text={this.state.pageCaption} 
        navBarVisible = {this.state.navBarVisible}
        handleNavBarToggle={this.handleNavBarToggle}>
      </Header>
      <div className="container">
      <NavBar visible={this.state.navBarVisible}></NavBar>
      <MainContents 
        data={this.state.data} 
        demoUsers={this.state.demoUsers}
        windowHeight={this.state.windowHeight}
        windowWidth={this.state.windowWidth}
        filterVisible={this.state.filterVisible}
        handleFilterToggle={this.handleFilterToggle}
      >  
      </MainContents>
      </div>
      <Footer text={"© 2016-2020, ФГУ ФНЦ НИИСИ РАН"}></Footer>
     {/*
      <h2>Inside React App</h2>
      {this.state.data.map(item => 
        (<p>{JSON.stringify(item)}</p>)
      )}
     */}
  
		</div>
	);
}
}

export default App;

