import user from 'data/user.json';
import data from 'data/data.json';
// import friends from 'data/friends.json';
// import transactions from 'data/transactions.json';
import { Container } from './AppStyles';
import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload Stats" stats={data} />
    </Container>
  );
};
