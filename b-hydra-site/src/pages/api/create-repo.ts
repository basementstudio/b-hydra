import { FormId } from 'lib/form-data'
import { sleep } from 'lib/utils'
import { NextApiHandler } from 'next'

type Body = Record<FormId, string>

const handler: NextApiHandler = async (req, res) => {
  const body = req.body as Body

  console.log(body)

  try {
    await sleep(1000)

    res.status(200).json({})
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export default handler
