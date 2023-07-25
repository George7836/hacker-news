import { styled } from "styled-components";
import NewsList from "../components/NewsList";
import { useEffect } from "react";
import { changePage } from "../store/slices/pageSlice";
import { useAppDispatch } from "../types/hooks";

export default function MainPage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(changePage('main'))
  }, [])

  return (
    <>
      <Title>News</Title>
      <NewsList/>
    </>
  )
}

const Title = styled.h2`
  margin-bottom: 20px;
`