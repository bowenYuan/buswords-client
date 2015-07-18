import './theme';
import { router, route } from 'reapp-kit';

router(require,
  route('app', '/',
    route('stickers'),
    route('trends')
  )
);
