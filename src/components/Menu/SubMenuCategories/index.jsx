import React, { Fragment } from "react";
import { Container, Col, Row } from "reactstrap";
import "./styles.css";

class SubMenuCategories extends React.Component {
  constructor() {
    super();

    this.state = {
      listFilms: [
        { id: 1, name: "Phim hành động" },
        { id: 2, name: "Phim hài hước" },
        { id: 3, name: "Phim cổ trang" },
        { id: 4, name: "Phim chính kịch - Drama" },
        { id: 5, name: "Phim viễn tưởng" },
        { id: 6, name: "Phim võ thuật" },
        { id: 7, name: "Phim thần thoại" },
        { id: 8, name: "Phim thể thao - Âm nhạc" },
        { id: 9, name: "Phim chiến tranh" },
        { id: 10, name: "Phim kinh dị" },
        { id: 11, name: "Phim tâm lý" },
        { id: 12, name: "Phim gia đình" },
        { id: 13, name: "Phim hình sự" },
        { id: 14, name: "Phim hồi hộp - Gay cấn" },
        { id: 15, name: "Phim tài liệu" },
        { id: 16, name: "Phim hoạt hình" },
        { id: 17, name: "Phim phưu lưu - Mạo hiểm" },
        { id: 18, name: "Phim bí ẩn - Siêu nhiên" },
        { id: 19, name: "Phim tình cảm - Lãng mạn" },
      ],
    };
  }
  render() {
    const { listFilms } = this.state;
    return (
      <Fragment>
        {listFilms.map((film, index) => (
          <Col sm="3" key={index}>
            <li className="submenu-catogories__list">{film.name}</li>
          </Col>
        ))}
      </Fragment>
    );
  }
}

export default SubMenuCategories;
