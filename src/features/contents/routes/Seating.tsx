import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, Stack, TextField, styled } from '@mui/material';
import { KonvaEventObject } from 'konva/lib/Node';
import { useState } from 'react';
import { Circle, Layer, Stage, Text } from 'react-konva';
import { useNavigate } from 'react-router-dom';

import { BackButton } from '@/components/BackButton';

const Wrapper = styled('div')({
  margin: '16px',
});

const CENTER_X = 125;
const CENTER_Y = 225;
const TABLE_1 = ['1-1', '1-2', '1-3', '1-4', '1-5', '1-6', '1-7', '1-8'];
const TABLE_2 = ['2-1', '2-2', '2-3', '2-4', '2-5', '2-6', '2-7', '2-8'];
const TABLE_3 = ['3-1', '3-2', '3-3', '3-4', '3-5', '3-6', '3-7', '3-8'];
const TABLE_4 = ['4-1', '4-2', '4-3', '4-4', '4-5', '4-6', '4-7', '4-8'];
const TABLE_5 = ['5-1', '5-2', '5-3', '5-4', '5-5', '5-6', '5-7', '5-8'];
const TABLE_COLOR = '#6FA9CE';
const MY_TABLE_COLOR = '#DF7448';
const CHAIR_COLOR = '#2EA2B0';
const MY_CHAIR_COLOR = '#EBA487';

export const Seating = (): JSX.Element => {
  const navigate = useNavigate();
  const [searchName, setSearchName] = useState('');

  const [stageState, setStageState] = useState({
    stageScale: 1,
    stageX: 0,
    stageY: 0,
  });

  const handleWheel = (e: KonvaEventObject<WheelEvent>) => {
    const scaleBy = 1.02;
    const stage = e.target.getStage();
    if (!stage) return;
    const oldScale = stage.scaleX();

    const position = stage.getPointerPosition();
    if (!position) return;

    const mousePointTo = {
      x: position.x / oldScale - stage.x() / oldScale,
      y: position.y / oldScale - stage.y() / oldScale,
    };

    const newScale = e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;

    setStageState({
      stageScale: newScale,
      stageX: -(mousePointTo.x - position.x / newScale) * newScale,
      stageY: -(mousePointTo.y - position.y / newScale) * newScale,
    });
  };

  return (
    <>
      <Wrapper>
        <Stack spacing={2}>
          <TextField
            variant="standard"
            label="座席を探す"
            fullWidth
            onChange={(e) => setSearchName(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          ></TextField>
          <Stage width={900} height={600} onWheel={(e) => handleWheel(e)} scaleX={stageState.stageScale} scaleY={stageState.stageScale} x={stageState.stageX} y={stageState.stageY}>
            <Layer>
              <Circle x={CENTER_X + 255} y={CENTER_Y - 150} scaleX={0.7} scaleY={0.7} radius={50} fill={searchName === '新郎' ? MY_TABLE_COLOR : TABLE_COLOR} />
              <Text x={CENTER_X + 242.5} y={CENTER_Y - 155} text="新郎" align="center" />
              <Circle x={CENTER_X + 345} y={CENTER_Y - 150} scaleX={0.7} scaleY={0.7} radius={50} fill={searchName === '新婦' ? MY_TABLE_COLOR : TABLE_COLOR} />
              <Text x={CENTER_X + 332.5} y={CENTER_Y - 155} text="新婦" align="center" />
              <Circle x={CENTER_X} y={CENTER_Y} radius={50} fill={TABLE_1.includes(searchName) ? MY_TABLE_COLOR : TABLE_COLOR} />
              <Text x={CENTER_X - 25} y={CENTER_Y - 5} text="テーブル1" align="center" />
              {TABLE_1.map((n, index) => {
                return (
                  <>
                    <Circle
                      key={index}
                      x={Math.cos((Math.PI / 180) * 45 * index) * 85 + CENTER_X}
                      y={Math.sin((Math.PI / 180) * 45 * index) * 85 + CENTER_Y}
                      scaleX={0.5}
                      scaleY={0.5}
                      radius={50}
                      fill={n === searchName ? MY_CHAIR_COLOR : CHAIR_COLOR}
                    />
                    <Text x={Math.cos((Math.PI / 180) * 45 * index) * 85 + CENTER_X - 18} y={Math.sin((Math.PI / 180) * 45 * index) * 85 + CENTER_Y - 5} text={n} align="center" />
                  </>
                );
              })}
              <Circle x={CENTER_X + 300} y={CENTER_Y} radius={50} fill={TABLE_COLOR} />
              <Text x={CENTER_X - 25 + 300} y={CENTER_Y - 5} text="テーブル2" align="center" />
              {TABLE_2.map((n, index) => {
                return (
                  <>
                    <Circle
                      key={index}
                      x={Math.cos((Math.PI / 180) * 45 * index) * 85 + CENTER_X + 300}
                      y={Math.sin((Math.PI / 180) * 45 * index) * 85 + CENTER_Y}
                      scaleX={0.5}
                      scaleY={0.5}
                      radius={50}
                      fill={n === searchName ? MY_CHAIR_COLOR : CHAIR_COLOR}
                    />
                    <Text x={Math.cos((Math.PI / 180) * 45 * index) * 85 + CENTER_X + 300 - 18} y={Math.sin((Math.PI / 180) * 45 * index) * 85 + CENTER_Y - 5} text={n} align="center" />
                  </>
                );
              })}
              <Circle x={CENTER_X + 600} y={CENTER_Y} radius={50} fill={TABLE_COLOR} />
              <Text x={CENTER_X - 25 + 600} y={CENTER_Y - 5} text="テーブル3" align="center" />
              {TABLE_3.map((n, index) => {
                return (
                  <>
                    <Circle
                      key={index}
                      x={Math.cos((Math.PI / 180) * 45 * index) * 85 + CENTER_X + 600}
                      y={Math.sin((Math.PI / 180) * 45 * index) * 85 + CENTER_Y}
                      scaleX={0.5}
                      scaleY={0.5}
                      radius={50}
                      fill={n === searchName ? MY_CHAIR_COLOR : CHAIR_COLOR}
                    />
                    <Text x={Math.cos((Math.PI / 180) * 45 * index) * 85 + CENTER_X + 600 - 18} y={Math.sin((Math.PI / 180) * 45 * index) * 85 + CENTER_Y - 5} text={n} align="center" />
                  </>
                );
              })}
              <Circle x={CENTER_X + 150} y={CENTER_Y + 200} radius={50} fill={TABLE_COLOR} />
              <Text x={CENTER_X - 25 + 150} y={CENTER_Y - 5 + 200} text="テーブル4" align="center" />
              {TABLE_4.map((n, index) => {
                return (
                  <>
                    <Circle
                      key={index}
                      x={Math.cos((Math.PI / 180) * 45 * index) * 85 + CENTER_X + 150}
                      y={Math.sin((Math.PI / 180) * 45 * index) * 85 + CENTER_Y + 200}
                      scaleX={0.5}
                      scaleY={0.5}
                      radius={50}
                      fill={n === searchName ? MY_CHAIR_COLOR : CHAIR_COLOR}
                    />
                    <Text x={Math.cos((Math.PI / 180) * 45 * index) * 85 + CENTER_X + 150 - 18} y={Math.sin((Math.PI / 180) * 45 * index) * 85 + CENTER_Y + 200 - 5} text={n} align="center" />
                  </>
                );
              })}
              <Circle x={CENTER_X + 450} y={CENTER_Y + 200} radius={50} fill={TABLE_COLOR} />
              <Text x={CENTER_X - 25 + 450} y={CENTER_Y - 5 + 200} text="テーブル5" align="center" />
              {TABLE_5.map((n, index) => {
                return (
                  <>
                    <Circle
                      key={index}
                      x={Math.cos((Math.PI / 180) * 45 * index) * 85 + CENTER_X + 450}
                      y={Math.sin((Math.PI / 180) * 45 * index) * 85 + CENTER_Y + 200}
                      scaleX={0.5}
                      scaleY={0.5}
                      radius={50}
                      fill={n === searchName ? MY_CHAIR_COLOR : CHAIR_COLOR}
                    />
                    <Text x={Math.cos((Math.PI / 180) * 45 * index) * 85 + CENTER_X + 450 - 18} y={Math.sin((Math.PI / 180) * 45 * index) * 85 + CENTER_Y + 200 - 5} text={n} align="center" />
                  </>
                );
              })}
            </Layer>
          </Stage>
          <BackButton onClick={() => navigate('/contents')} />
        </Stack>
      </Wrapper>
    </>
  );
};
