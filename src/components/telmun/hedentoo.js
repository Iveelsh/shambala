import Typography from 'components/typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const Fournumber = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  console.log(matches)
  return (
    <div className="relative md:h-[19rem] h-[500px] flex items-center overflow-x-hidden  md:overflow-hidden">
      <div className="absolute top-0 left-0 w-full hidden md:block lg:block h-full bg-earthBg z-10" />
      <div className="absolute md:blur-[4px] opacity-30 md:opacity-100 w-[500px]  md:w-[100%] md:max-w-shambWidth z-0 -left-12  md:left-1/2 md:transform md:-translate-x-1/2">
        <img src="assets/earth.webp" />
      </div>
      <div className="flex w-full mx-auto max-w-shambWidth z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 w-full gap-[40px]">
          <div className="flex flex-col items-center">
            <Typography variant={matches ? 'h4' : 'h2'} className=" text-white">
              24,533
            </Typography>
            <Typography variant="title-small" className="text-white opacity-50">
              Tree
            </Typography>
          </div>
          <div className="flex flex-col items-center">
            <Typography variant={matches ? 'h4' : 'h2'} className=" text-white">
              24,533
            </Typography>
            <Typography variant="title-small" className="text-white opacity-50">
              Tree
            </Typography>
          </div>
          <div className="flex flex-col items-center">
            <Typography variant={matches ? 'h4' : 'h2'} className=" text-white">
              24,533
            </Typography>
            <Typography variant="title-small" className="text-white opacity-50">
              Tree
            </Typography>
          </div>
          <div className="flex flex-col items-center">
            <Typography variant={matches ? 'h4' : 'h2'} className=" text-white">
              24,533
            </Typography>
            <Typography variant="title-small" className="text-white opacity-50">
              Tree
            </Typography>
          </div>
        </div>

        {/*
        <div className="flex flex-col items-center  ">
          <Typography variant="h4 md:h2 lg:h2      " className=" text-white" children="24,533" />
          <Typography variant="title-small" className="text-white opacity-50" children="Reserved water" />
        </div>
        <div className="flex flex-col items-center  ">
          <Typography variant="h2" className=" text-white" children="24,533" />
          <Typography variant="title-small" className="text-white opacity-50" children="Restored" />
        </div>
        <div className="flex flex-col items-center  ">
          <Typography variant="h2" className=" text-white" children="24,533" />
          <Typography variant="title-small" className="text-white opacity-50" children="Organic access" />
        </div> */}
      </div>
    </div>
  )
}
export default Fournumber