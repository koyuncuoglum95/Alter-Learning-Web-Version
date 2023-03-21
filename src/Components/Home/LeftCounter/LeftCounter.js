import React from 'react';
import { Card, CardHeader, CardBody, Row, Col, Container, CardImg } from 'reactstrap';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators
} from 'reactstrap';
import './LeftCounter.css';

const items = [
    {
        src: 'images/widget.webp',

    },
    {
        src: 'images/widget3.webp',

    },
    {
        src: 'images/widget4.webp',

    }
];

const itemsnew = [
    {
        src: 'images/widget2.webp',

    },
    {
        src: 'images/widget5.webp',

    },
    {
        src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',

    }
];

class LeftCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);

    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                    className='carouseltest'
                >
                    <img src={item.src} className='test' alt="" />
                </CarouselItem>
            );
        });

        const slidesnew = itemsnew.map((itemnew) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={itemnew.src}
                    className='carouseltest'
                >
                    <img src={itemnew.src} className='test' alt="" />
                </CarouselItem>
            );
        });
        return (
            <div>
                <div>
                    <Card className='testcard' style={{ width: '58rem', borderRadius: 8 }}>
                        <CardHeader as="h5" align="left">Alter Learning Connect</CardHeader>
                        <CardBody className='cardBody'>
                            <Carousel
                                activeIndex={activeIndex}
                                next={this.next}
                                previous={this.previous}
                                className='testcarousel'
                            >
                                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                                {slides}
                                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                            </Carousel>
                        </CardBody>
                    </Card>
                </div >

                <div>
                    <Container>
                        <Row>
                            <Col>
                                <div style={{ marginTop: "50px" }}>
                                    <Card className='testcard' style={{ width: '27rem', borderRadius: 8 }}>
                                        <CardHeader as="h5" align="left">FEATURED VIDEO <i class="far fa-thumbs-up"></i> <i class="far fa-comment-alt"></i> <i class="far fa-bookmark"></i> </CardHeader>
                                        <CardImg top width="100%" src="images/v443_23035.png" alt="Card image cap" />
                                        <CardBody className='cardBody'>
                                        </CardBody>
                                    </Card>
                                </div>
                            </Col>
                            <Col>
                                <div style={{ marginTop: "50px" }}>
                                    <Card className='testcard' style={{ width: '27rem', borderRadius: 8 }}>
                                        <CardHeader as="h5" align="left">FEATURED VIDEO <i class="far fa-thumbs-up"></i> <i class="far fa-comment-alt"></i> <i class="far fa-bookmark"></i></CardHeader>
                                        <CardImg top width="100%" src="images/v443_23018.png" alt="Card image cap" />
                                        <CardBody className='cardBody'>
                                        </CardBody>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div style={{ marginTop: "50px" }}>
                    <Card className='testcard' style={{ width: '58rem', borderRadius: 8 }}>
                        <CardHeader as="h5" align="left">SPONSERED EVENTS <i class="far fa-thumbs-up"></i> <i class="far fa-comment-alt"></i> <i class="far fa-bookmark"></i></CardHeader>
                        <CardBody className='cardBody'>

                            <Carousel
                                activeIndex={activeIndex}
                                next={this.next}
                                previous={this.previous}
                                className='testcarousel'

                            >
                                <CarouselIndicators items={itemsnew} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                                {slidesnew}
                                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                            </Carousel>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }

}

export default LeftCounter;

