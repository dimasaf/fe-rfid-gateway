import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { getDevices } from "../../features/appContainer/appContainerSlice";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

// import Box from "@mui/material/Box";
const HeaderInfo = styled(Box)(() => ({
  backgroundColor: "#393E46",
  color: "#fff",
  padding: "6px 10px",
}));
const HeaderWrapper = styled(Box)(() => ({
  paddingBottom: "20px",
}));
const Row = styled(Box)(() => ({
  display: "flex",
}));

function StatusPage() {
  const dispatch = useDispatch();
  const { deviceData, isLoading } = useSelector(
    (state) => state.appContainer,
    shallowEqual
  );

  useEffect(() => {
    dispatch(getDevices());
  }, [dispatch]);

  const device = deviceData?.data?.device;
  const network = deviceData?.data?.network?.en0[1];
  console.log(network);
  return (
    <div>
      <HeaderWrapper>
        <HeaderInfo>Info nih bos</HeaderInfo>
      </HeaderWrapper>
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "40px",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ paddingX: "80px" }}>
          <Row>
            <Typography paragraph>Free Memory :</Typography>
            <Typography paragraph>{device?.free_memory}</Typography>
          </Row>
          <Row>
            <Typography paragraph>Localtime :</Typography>
            <Typography paragraph>{device?.localtime}</Typography>
          </Row>
          <Row>
            <Typography paragraph>Mac :</Typography>
            <Typography paragraph>{device?.mac}</Typography>
          </Row>
          <Row>
            <Typography paragraph>Mac :</Typography>
            <Typography paragraph>{device?.memory_usage}</Typography>
          </Row>
          <Row>
            <Typography paragraph>Mac :</Typography>
            <Typography paragraph>{device?.uptime}</Typography>
          </Row>
        </Box>
      )}

      <HeaderWrapper>
        <HeaderInfo>Info nih bos</HeaderInfo>
      </HeaderWrapper>

      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "40px",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ paddingX: "80px" }}>
          <Row>
            <Typography paragraph>wifi :</Typography>
            <Typography paragraph>utuk tuktus</Typography>
          </Row>
          <Row>
            <Typography paragraph>address :</Typography>
            <Typography paragraph>{network?.address}</Typography>
          </Row>
          <Row>
            <Typography paragraph>cidr :</Typography>
            <Typography paragraph>{network?.cidr}</Typography>
          </Row>
          <Row>
            <Typography paragraph>family :</Typography>
            <Typography paragraph>{network?.family}</Typography>
          </Row>
          <Row>
            <Typography paragraph>mac :</Typography>
            <Typography paragraph>{network?.mac}</Typography>
          </Row>
          <Row>
            <Typography paragraph>netmask :</Typography>
            <Typography paragraph>{network?.netmask}</Typography>
          </Row>
        </Box>
      )}
    </div>
  );
}

export default StatusPage;
