import Navigation from 'common/menu/navigation'
import Hero from 'components/home/hero'
import Wrapper from 'common/wrapper'
import BottomArt from 'components/home/bottom-art'
import WorkTeam from 'components/home/work-team'

function Index() {
  return (
    <>
      <Navigation />
      <Hero />
      <BottomArt>
        <Wrapper>
          <WorkTeam />
        </Wrapper>
      </BottomArt>
    </>
  )
}

export default Index