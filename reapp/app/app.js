import './theme';
import { router, route } from 'reapp-kit';

router(require,
  route('app', '/',
    route('stickersView'),
    route('trends'),
    route('chat')
  )
);
