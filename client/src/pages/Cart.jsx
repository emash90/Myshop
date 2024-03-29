import { AddAPhoto, AddCircleOutlineOutlined, RemoveCircle, RemoveCircleOutlineRounded } from "@material-ui/icons"
import styled from "styled-components"


const Container = styled.div``

const Wrapper = styled.div`
  padding: 50px;
  `

const Title = styled.h1`
  font-weight: 200;
  text-align: center;
  `

const Top = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  `
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props => props.type === "filled" && "none"};
  background-color: ${props => props.type === "filled" ? "black" : "transparent"};
  color: ${props => props.type === "filled" && "white"};
  `
const TopTexts = styled.div`

  `
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  `

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`
const Info = styled.div`
  flex: 3;
  `
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  `
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  `
const Image = styled.img`
  width: 200px;
  `
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  `
const ProductName = styled.span`
  font-weight: 200;
  `
const ProductId = styled.span`
  font-weight: 200;
`

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  `
const ProductSize = styled.span`
  font-weight: 200;
`
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  `
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  `
const Remove = styled.span`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 5px;
  `
const Add = styled(Remove)`
  margin-right: 0px;
  margin-left: 5px;
  cursor: pointer;
  `
const Amount = styled.span`
  font-size: 24px;
  font-weight: 200;
  margin: 5px;
  `

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  `
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  `
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  `

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  height: 50vh;
  padding: 20px;
`
const SummaryTitle = styled.h1`
  font-weight: 200;
  `
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === "total" && "500"};
  font-size: ${props => props.type === "total" && "24px"};
  `
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
  `




const Cart = () => {
  return (
    <Container>
      <Wrapper>
        <Title>cart</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopText>Shopping Bag (2)</TopText>
          <TopText>Your Wishlist (0)</TopText>
          <TopButton type="filled">Checkout</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                <Details>
                  <ProductName><b>Product:</b> Jumpsuit</ProductName>
                  <ProductId><b>ID:</b> 93813718293</ProductId>
                  <ProductColor color="black" />
                  <ProductSize><b>Size:</b> M</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>Price
                <ProductAmountContainer>
                  <RemoveCircleOutlineRounded />
                  <Amount>1</Amount>
                  <AddCircleOutlineOutlined />
                </ProductAmountContainer>
                <ProductPrice>Rs. 100</ProductPrice>
              </PriceDetail>

            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src='https://i.ibb.co/DG69bQ4/2.png' />
                <Details>
                  <ProductName><b>Product:</b> Jumpsuit</ProductName>
                  <ProductId><b>ID:</b> 93813718293</ProductId>
                  <ProductColor color="black" />
                  <ProductSize><b>Size:</b> M</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>Price
                <ProductAmountContainer>
                  <RemoveCircleOutlineRounded />
                  <Amount>1</Amount>
                  <AddCircleOutlineOutlined />
                </ProductAmountContainer>
                <ProductPrice>Rs. 100</ProductPrice>
              </PriceDetail>

            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>Rs. 100</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>Rs. 100</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>Rs. 100</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout</Button>
          </Summary>
        </Bottom>

      </Wrapper>
      
    </Container>
  )
}

export default Cart
