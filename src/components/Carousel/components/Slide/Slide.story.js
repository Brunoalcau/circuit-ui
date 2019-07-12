/**
 * Copyright 2019, SumUp Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { GROUPS } from '../../../../../.storybook/hierarchySeparators';
import withTests from '../../../../util/withTests';

import Heading from '../../../Heading';
import Image from '../../../Image';
import Slide from './Slide';

const headingStyles = css`
  color: #fff;
  width: 50%;
  position: absolute;
  bottom: 0;
  left: 25px;
  z-index: 2;
`;
const StyledHeading = styled(Heading)(headingStyles);

storiesOf(`${GROUPS.COMPONENTS}|Carousel/Slide`, module)
  .addDecorator(withTests('Carousel/Slide'))
  .add('Slide with image', () => (
    <div style={{ width: '60vw' }}>
      <Slide>
        <Image src="http://www.placepuppy.net/800/500" alt="random puppy" />
      </Slide>
    </div>
  ))
  .add('Slide with text and image', () => (
    <div style={{ width: '60vw' }}>
      <Slide>
        <Image src="http://www.placepuppy.net/800/500" alt="random puppy" />
        <StyledHeading>Get The SumUp Card Reader Today!</StyledHeading>
      </Slide>
    </div>
  ));
